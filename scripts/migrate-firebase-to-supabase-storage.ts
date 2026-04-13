/**
 * Migrate images from Firebase/GCS bucket → Supabase Storage, then rewrite
 * all Firebase signed URLs in the codebase (and optionally in blog_posts DB)
 * to stable Supabase public URLs.
 *
 * Usage:
 *   npx tsx scripts/migrate-firebase-to-supabase-storage.ts [flags]
 *
 * Flags:
 *   --from-sources          (default) Scan src/** for Firebase URLs and download
 *                           each file via its existing signed URL (no GCS billing
 *                           required — works even when Firebase billing is disabled).
 *   --prefix <gcs-prefix>   Use GCS SDK to list/download all objects under this
 *                           prefix (requires active Firebase billing).
 *   --bucket <name>         Target Supabase bucket (default: hotel-daleese).
 *   --update-blog-db        Also replace Firebase URLs in Supabase blog_posts table.
 *   --dry-run               Log everything that would happen without touching files
 *                           or uploading.
 *
 * Prerequisites:
 *   - Supabase: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local.
 *   - GCS credentials only needed for --prefix mode.
 *
 * Run order: --dry-run first, then the real run, then verify a few pages.
 */

// Load environment variables FIRST, before any other imports.
import { config } from 'dotenv';
import { resolve } from 'path';
import { existsSync } from 'fs';

const envLocalPath = resolve(process.cwd(), '.env.local');
const envPath = resolve(process.cwd(), '.env');
if (existsSync(envLocalPath)) {
  config({ path: envLocalPath });
  console.log('Loaded env from .env.local');
} else if (existsSync(envPath)) {
  config({ path: envPath });
  console.log('Loaded env from .env');
} else {
  console.warn('No .env.local or .env found — credentials must already be in env.');
}

import { Storage } from '@google-cloud/storage';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import {
  createBucketIfNotExists,
  uploadBuffer,
  getPublicUrl,
  getSupabaseAdminClient,
} from '../src/lib/supabase-storage';

/** Supabase client has no generated `Database` type, so `.from('blog_posts')` rows infer as `never` without this. */
interface BlogPostMigrationRow {
  id: string;
  image_url: string | null;
  content: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const GCS_BUCKET = 'sempre-studios-893c8.appspot.com';
const FIREBASE_URL_BASE = 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/';

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);

const isDryRun = args.includes('--dry-run');
const updateBlogDb = args.includes('--update-blog-db');

const prefixIndex = args.indexOf('--prefix');
const gcsPrefix = prefixIndex !== -1 ? args[prefixIndex + 1] : undefined;

const bucketIndex = args.indexOf('--bucket');
const supabaseBucket = bucketIndex !== -1 ? args[bucketIndex + 1] : 'hotel-daleese';

// ---------------------------------------------------------------------------
// URL / path helpers
// ---------------------------------------------------------------------------

/**
 * Extract the GCS object name from a Firebase signed URL.
 * Returns null if the URL does not match the expected bucket.
 *
 * Input:  https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/foo.jpg?GoogleAccessId=...
 * Output: default/uploads/foo.jpg
 */
function extractObjectName(url: string): string | null {
  const match = url.match(
    /https:\/\/storage\.googleapis\.com\/sempre-studios-893c8\.appspot\.com\/([^"'\s)]+)/
  );
  if (!match) return null;
  const withoutQuery = match[1].split('?')[0];
  return decodeURIComponent(withoutQuery);
}

function getContentType(fileName: string): string {
  const ext = (fileName.split('.').pop() ?? '').toLowerCase();
  const map: Record<string, string> = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    webp: 'image/webp',
    heic: 'image/heic',
    heif: 'image/heif',
    svg: 'image/svg+xml',
    mp4: 'video/mp4',
    pdf: 'application/pdf',
  };
  return map[ext] ?? 'application/octet-stream';
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ---------------------------------------------------------------------------
// Step 1 — Discover objects: { objectName → signedUrl } from source files
// ---------------------------------------------------------------------------

/**
 * Scan src/** for Firebase signed URLs.
 * Returns a map of decoded object name → one full signed URL that can be
 * fetched directly via HTTP (no GCS billing needed).
 */
async function collectFromSources(): Promise<Map<string, string>> {
  const srcDir = path.join(process.cwd(), 'src');
  const files = await glob('**/*.{ts,tsx}', {
    cwd: srcDir,
    ignore: ['**/*.d.ts', '**/node_modules/**', '**/.next/**'],
  });

  // objectName → full signed URL (keep first occurrence)
  const map = new Map<string, string>();

  for (const file of files) {
    const content = fs.readFileSync(path.join(srcDir, file), 'utf-8');
    // Match the full Firebase URL including query string
    const urlRegex =
      /https:\/\/storage\.googleapis\.com\/sempre-studios-893c8\.appspot\.com\/[^"'\s)]+/g;
    const matches = content.match(urlRegex) ?? [];
    for (const url of matches) {
      const objectName = extractObjectName(url);
      if (objectName && !map.has(objectName)) {
        // Keep the full URL (with ?GoogleAccessId=... signature) for HTTP fetch
        map.set(objectName, url);
      }
    }
  }

  return map;
}

// ---------------------------------------------------------------------------
// Step 1 (alt) — Discover objects via GCS SDK prefix listing
// ---------------------------------------------------------------------------

function buildGcsClient(): Storage {
  const projectId = 'sempre-studios-893c8';

  if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    try {
      const credentials = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
      return new Storage({ projectId, credentials });
    } catch {
      console.warn('Could not parse FIREBASE_SERVICE_ACCOUNT_KEY; trying next method.');
    }
  }

  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    return new Storage({ projectId, keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS });
  }

  for (const keyPath of [
    './firebase-service-account.json',
    './sempre-studios-893c8-firebase-adminsdk-gkp49-21cb92dca4.json',
  ]) {
    if (fs.existsSync(path.resolve(process.cwd(), keyPath))) {
      return new Storage({ projectId, keyFilename: path.resolve(process.cwd(), keyPath) });
    }
  }

  throw new Error(
    'No GCS credentials found. Set FIREBASE_SERVICE_ACCOUNT_KEY or GOOGLE_APPLICATION_CREDENTIALS.'
  );
}

async function collectFromPrefix(prefix: string): Promise<Map<string, string>> {
  const gcs = buildGcsClient();
  const bucket = gcs.bucket(GCS_BUCKET);
  const [files] = await bucket.getFiles({ prefix });
  // No pre-existing signed URL; value is empty string — download will use GCS SDK
  const map = new Map<string, string>();
  for (const file of files) {
    map.set(file.name, '');
  }
  return map;
}

// ---------------------------------------------------------------------------
// Step 2 — Download (HTTP or GCS SDK) and upload to Supabase
// ---------------------------------------------------------------------------

interface MigrationRecord {
  objectName: string;
  oldUrl: string;    // encoded base URL (no ?query) — used for regex replacement
  newUrl: string;
  success: boolean;
  skipped?: boolean; // true in dry-run
  error?: string;
}

async function downloadViaHttp(signedUrl: string): Promise<Buffer> {
  const response = await fetch(signedUrl);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function migrateObjects(
  sourceMap: Map<string, string>, // objectName → signedUrl ('' = use GCS SDK)
  useGcsSdk: boolean
): Promise<MigrationRecord[]> {
  const records: MigrationRecord[] = [];
  const list = Array.from(sourceMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  console.log(`\n=== Migrating ${list.length} object(s) to Supabase bucket: ${supabaseBucket} ===\n`);

  // Ensure bucket exists before starting uploads
  if (!isDryRun) {
    try {
      await createBucketIfNotExists(supabaseBucket, true);
      console.log(`✓ Bucket ready: ${supabaseBucket}\n`);
    } catch (err: any) {
      if (err.message?.includes('row-level security')) {
        console.warn(`⚠ Bucket creation blocked by RLS; assuming ${supabaseBucket} exists.\n`);
      } else {
        throw err;
      }
    }
  }

  // GCS SDK bucket reference — only built when needed
  let gcsBucket: ReturnType<Storage['bucket']> | null = null;
  if (useGcsSdk && !isDryRun) {
    gcsBucket = buildGcsClient().bucket(GCS_BUCKET);
  }

  for (let i = 0; i < list.length; i++) {
    const [objectName, signedUrl] = list[i];
    const label = `[${i + 1}/${list.length}]`;

    // Build the canonical "base" URL used for regex replacement in source files.
    // Encode each path segment (handles spaces, & etc.) but keep slashes.
    const encodedPath = objectName
      .split('/')
      .map((seg) => encodeURIComponent(seg))
      .join('/');
    const oldUrlBase = `${FIREBASE_URL_BASE}${encodedPath}`;

    const newUrl = getPublicUrl(supabaseBucket, objectName);

    if (isDryRun) {
      console.log(`${label} DRY-RUN  ${objectName}`);
      console.log(`          → ${newUrl}`);
      records.push({ objectName, oldUrl: oldUrlBase, newUrl, success: true, skipped: true });
      continue;
    }

    try {
      let buffer: Buffer;
      const contentType = getContentType(objectName);

      if (signedUrl) {
        // --from-sources mode: fetch via existing signed URL (no billing needed)
        process.stdout.write(`${label} Fetching via URL: ${objectName} … `);
        buffer = await downloadViaHttp(signedUrl);
      } else {
        // --prefix mode: download via GCS SDK
        process.stdout.write(`${label} Downloading via GCS: ${objectName} … `);
        const [data] = await gcsBucket!.file(objectName).download();
        buffer = data;
      }

      const uploadedUrl = await uploadBuffer(supabaseBucket, objectName, buffer, {
        contentType,
        upsert: true,
      });

      console.log(`✓`);
      console.log(`     → ${uploadedUrl}`);
      records.push({ objectName, oldUrl: oldUrlBase, newUrl: uploadedUrl, success: true });
    } catch (err: any) {
      console.log('✗');
      console.error(`     Failed: ${err.message}`);
      records.push({ objectName, oldUrl: oldUrlBase, newUrl, success: false, error: err.message });
    }
  }

  return records;
}

// ---------------------------------------------------------------------------
// Step 3 — Rewrite Firebase URLs in repo source files
// ---------------------------------------------------------------------------

async function rewriteSourceFiles(records: MigrationRecord[]): Promise<void> {
  // Include dry-run (skipped) records too so we can show the preview.
  const toRewrite = records.filter((r) => r.success);
  if (toRewrite.length === 0) {
    console.log('\nNo migrations to rewrite in source files.');
    return;
  }

  const srcDir = path.join(process.cwd(), 'src');
  const files = await glob('**/*.{ts,tsx,js,jsx}', {
    cwd: srcDir,
    ignore: ['**/*.d.ts', '**/node_modules/**', '**/.next/**'],
  });

  console.log(`\n=== Rewriting Firebase URLs in ${files.length} source file(s) ===\n`);

  // For each migration build a regex that matches the base URL optionally followed
  // by a ?query string (the signed URL suffix), up to the next quote/space/paren.
  const replacements = toRewrite.map((r) => ({
    pattern: new RegExp(escapeRegex(r.oldUrl) + '(?:\\?[^"\'\\s)]*)?', 'g'),
    replacement: r.newUrl,
    objectName: r.objectName,
  }));

  let filesChanged = 0;

  for (const file of files) {
    const filePath = path.join(srcDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let changed = false;

    for (const { pattern, replacement, objectName } of replacements) {
      if (pattern.test(content)) {
        pattern.lastIndex = 0;
        content = content.replace(pattern, replacement);
        changed = true;
        console.log(`  ✓ ${file}  →  ${objectName}`);
      }
      pattern.lastIndex = 0;
    }

    if (changed) {
      if (!isDryRun) {
        fs.writeFileSync(filePath, content, 'utf-8');
      } else {
        console.log(`  (dry-run: would write ${file})`);
      }
      filesChanged++;
    }
  }

  console.log(`\n${isDryRun ? 'Would update' : 'Updated'} ${filesChanged} file(s).`);
}

// ---------------------------------------------------------------------------
// Step 4 — Optional: rewrite blog_posts in Supabase DB
// ---------------------------------------------------------------------------

async function rewriteBlogPostsInDb(records: MigrationRecord[]): Promise<void> {
  const toRewrite = records.filter((r) => r.success);
  if (toRewrite.length === 0) return;

  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    console.warn(
      '\n⚠ --update-blog-db: No Supabase admin client (missing SUPABASE_SERVICE_ROLE_KEY). Skipping.'
    );
    return;
  }

  console.log('\n=== Updating blog_posts in Supabase DB ===\n');

  const { data, error: fetchErr } = await supabase
    .from('blog_posts')
    .select('id, image_url, content');

  if (fetchErr) {
    console.error('  ✗ Failed to fetch blog_posts:', fetchErr.message);
    return;
  }

  const posts = (data ?? []) as BlogPostMigrationRow[];
  if (posts.length === 0) {
    console.log('  No blog posts found.');
    return;
  }

  const replacements = toRewrite.map((r) => ({
    pattern: new RegExp(escapeRegex(r.oldUrl) + '(?:\\?[^"\'\\s)]*)?', 'g'),
    replacement: r.newUrl,
  }));

  let updatedCount = 0;

  for (const post of posts) {
    let imageUrl: string | null = post.image_url ?? null;
    let content: string = post.content ?? '';
    let changed = false;

    for (const { pattern, replacement } of replacements) {
      if (imageUrl && pattern.test(imageUrl)) {
        pattern.lastIndex = 0;
        imageUrl = imageUrl.replace(pattern, replacement);
        changed = true;
      }
      pattern.lastIndex = 0;

      if (pattern.test(content)) {
        pattern.lastIndex = 0;
        content = content.replace(pattern, replacement);
        changed = true;
      }
      pattern.lastIndex = 0;
    }

    if (!changed) continue;

    if (isDryRun) {
      console.log(`  (dry-run) Would update post id=${post.id}`);
      continue;
    }

    // Table not in generated Supabase types — entire chain infers `never` without a cast.
    const { error: updateErr } = await (supabase.from('blog_posts') as any)
      .update({ image_url: imageUrl, content })
      .eq('id', post.id);

    if (updateErr) {
      console.error(`  ✗ Failed to update post id=${post.id}:`, updateErr.message);
    } else {
      console.log(`  ✓ Updated post id=${post.id}`);
      updatedCount++;
    }
  }

  console.log(`\n${isDryRun ? 'Would update' : 'Updated'} ${updatedCount} blog post(s).`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const useGcsSdk = !!gcsPrefix;

  console.log('');
  console.log('=== Firebase → Supabase Storage Migration ===');
  console.log(`  Target bucket : ${supabaseBucket}`);
  console.log(`  Mode          : ${isDryRun ? 'DRY RUN (no changes)' : 'LIVE'}`);
  console.log(
    `  Source        : ${useGcsSdk ? `GCS prefix "${gcsPrefix}" (SDK download)` : 'signed URLs from src/** (HTTP fetch — no billing needed)'}`
  );
  console.log(`  Update DB     : ${updateBlogDb ? 'yes' : 'no'}`);
  console.log('');

  // 1 — Collect { objectName → signedUrl } map
  let sourceMap: Map<string, string>;

  if (useGcsSdk) {
    console.log(`Listing GCS objects with prefix: ${gcsPrefix}`);
    sourceMap = await collectFromPrefix(gcsPrefix!);
    console.log(`Found ${sourceMap.size} object(s) under prefix.\n`);
  } else {
    console.log('Scanning src/** for Firebase signed URLs…');
    sourceMap = await collectFromSources();
    console.log(`Found ${sourceMap.size} unique object(s) referenced in source files.\n`);
  }

  if (sourceMap.size === 0) {
    console.log('Nothing to migrate. Exiting.');
    return;
  }

  // 2 — Copy objects Firebase → Supabase
  const records = await migrateObjects(sourceMap, useGcsSdk);

  const successCount = records.filter((r) => r.success && !r.skipped).length;
  const failCount = records.filter((r) => !r.success).length;

  console.log('\n--- Copy summary ---');
  console.log(`  Successful : ${successCount}`);
  console.log(`  Failed     : ${failCount}`);
  if (isDryRun) console.log(`  (dry-run: nothing was uploaded)`);

  // 3 — Rewrite source files
  await rewriteSourceFiles(records);

  // 4 — Optionally rewrite DB
  if (updateBlogDb) {
    await rewriteBlogPostsInDb(records);
  }

  // 5 — Save migration report JSON
  const report = {
    runAt: new Date().toISOString(),
    dryRun: isDryRun,
    supabaseBucket,
    totalObjects: records.length,
    successful: successCount,
    failed: failCount,
    migrations: records.map((r) => ({
      objectName: r.objectName,
      newUrl: r.newUrl,
      success: r.success,
      ...(r.error ? { error: r.error } : {}),
    })),
  };

  const reportPath = path.join(process.cwd(), 'firebase-to-supabase-migration-report.json');
  if (!isDryRun) {
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n✓ Migration report saved to: ${reportPath}`);
  } else {
    console.log(`\n(dry-run: report would be saved to ${reportPath})`);
  }

  console.log('\n=== Done ===');

  if (failCount > 0) {
    console.error(`\n⚠  ${failCount} object(s) failed to migrate.`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('\n✗ Migration failed:', err);
  process.exit(1);
});
