/**
 * Script to convert HEIC images to JPG and upload them to Supabase Storage
 * 
 * Usage:
 *   npx tsx scripts/upload-to-supabase.ts [input-dir] [bucket-name] [--replace]
 * 
 * Examples:
 *   npx tsx scripts/upload-to-supabase.ts hotel-daleese casa-daleese
 *   npx tsx scripts/upload-to-supabase.ts "casa-daleese/Casa Daleese " casa-daleese --replace
 */

// Load environment variables from .env.local FIRST, before any other imports
import { config } from 'dotenv';
import { resolve } from 'path';
import { existsSync } from 'fs';

// Try .env.local first, then .env
const envLocalPath = resolve(process.cwd(), '.env.local');
const envPath = resolve(process.cwd(), '.env');

if (existsSync(envLocalPath)) {
  config({ path: envLocalPath });
  console.log('Loaded environment variables from .env.local');
} else if (existsSync(envPath)) {
  config({ path: envPath });
  console.log('Loaded environment variables from .env');
} else {
  console.warn('No .env.local or .env file found');
}

import path from 'path';
import fs from 'fs';
import { convertHeicToJpg } from './convert-heic-to-jpg';
import {
  createBucketIfNotExists,
  bucketExists,
  uploadFile,
  getPublicUrl,
  listFiles,
  deleteAllFiles,
} from '../src/lib/supabase-storage';

interface UploadResult {
  fileName: string;
  url: string;
  success: boolean;
  error?: string;
}

/**
 * Main upload function
 */
async function uploadImagesToSupabase(
  inputDir: string,
  bucketName: string = 'casa-daleese',
  replaceMode: boolean = false
): Promise<UploadResult[]> {
  console.log('=== Starting Image Upload to Supabase ===\n');

  // Step 1: Check if input directory exists
  if (!fs.existsSync(inputDir)) {
    throw new Error(`Input directory does not exist: ${inputDir}`);
  }

  console.log(`Input directory: ${inputDir}`);
  console.log(`Bucket name: ${bucketName}`);
  console.log(`Replace mode: ${replaceMode ? 'Yes (will delete existing files)' : 'No (will add to existing files)'}\n`);

  // Step 2: Check if bucket exists (skip creation if RLS policy prevents it)
  console.log('Checking bucket...');
  try {
    const exists = await bucketExists(bucketName);
    if (exists) {
      console.log(`✓ Bucket exists: ${bucketName}`);
    } else {
      // Try to create, but don't fail if RLS prevents it (bucket might exist but not be visible)
      try {
        const created = await createBucketIfNotExists(bucketName, true);
        if (created) {
          console.log(`✓ Created public bucket: ${bucketName}`);
        } else {
          console.log(`✓ Bucket already exists: ${bucketName}`);
        }
      } catch (createError: any) {
        // If creation fails due to RLS, assume bucket exists (it was created via MCP)
        if (createError.message.includes('row-level security')) {
          console.log(`⚠ Bucket creation blocked by RLS, assuming it exists: ${bucketName}`);
        } else {
          throw createError;
        }
      }
    }
  } catch (error: any) {
    // If we can't check, assume bucket exists and continue
    console.warn(`⚠ Could not verify bucket existence: ${error.message}`);
    console.log(`Continuing with assumption that bucket exists...`);
  }

  // Step 2.5: Delete existing files if in replace mode
  if (replaceMode) {
    console.log('\n=== Deleting Existing Files ===');
    try {
      const existingFiles = await listFiles(bucketName);
      if (existingFiles.length > 0) {
        console.log(`Found ${existingFiles.length} existing files to delete...`);
        const deletedCount = await deleteAllFiles(bucketName);
        console.log(`✓ Deleted ${deletedCount} existing files\n`);
      } else {
        console.log('No existing files to delete\n');
      }
    } catch (error: any) {
      console.warn(`⚠ Could not delete existing files: ${error.message}`);
      console.log('Continuing with upload...\n');
    }
  }

  // Step 3: Convert HEIC files to JPG
  console.log('\n=== Converting HEIC to JPG ===');
  const tempOutputDir = path.join(inputDir, '.converted-temp');
  
  let convertedFiles: string[] = [];
  
  try {
    const conversionResults = await convertHeicToJpg(inputDir, tempOutputDir);
    const successful = conversionResults.filter(r => r.success);
    
    if (successful.length === 0) {
      throw new Error('No files were successfully converted');
    }
    
    convertedFiles = successful.map(r => r.outputPath);
    console.log(`\n✓ Converted ${convertedFiles.length} files\n`);
  } catch (error: any) {
    console.error(`✗ Conversion failed: ${error.message}`);
    throw error;
  }

  // Step 4: Upload files to Supabase
  console.log('=== Uploading to Supabase ===');
  const results: UploadResult[] = [];

  for (let i = 0; i < convertedFiles.length; i++) {
    const filePath = convertedFiles[i];
    const fileName = path.basename(filePath);
    const supabasePath = fileName; // Upload to root of bucket

    try {
      console.log(`Uploading ${i + 1}/${convertedFiles.length}: ${fileName}`);
      
      const url = await uploadFile(bucketName, supabasePath, filePath, {
        contentType: 'image/jpeg',
        upsert: true, // Overwrite if exists
      });

      results.push({
        fileName,
        url,
        success: true,
      });

      console.log(`  ✓ Uploaded: ${url}\n`);
    } catch (error: any) {
      const errorMsg = error.message || String(error);
      console.error(`  ✗ Failed: ${errorMsg}\n`);
      
      results.push({
        fileName,
        url: '',
        success: false,
        error: errorMsg,
      });
    }
  }

  // Step 5: Cleanup temporary converted files
  console.log('Cleaning up temporary files...');
  try {
    if (fs.existsSync(tempOutputDir)) {
      const files = fs.readdirSync(tempOutputDir);
      for (const file of files) {
        fs.unlinkSync(path.join(tempOutputDir, file));
      }
      fs.rmdirSync(tempOutputDir);
      console.log('✓ Cleaned up temporary files');
    }
  } catch (error: any) {
    console.warn(`Warning: Could not clean up temp files: ${error.message}`);
  }

  // Step 6: Summary
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  console.log('\n=== Upload Summary ===');
  console.log(`Total files: ${results.length}`);
  console.log(`Successful: ${successful.length}`);
  console.log(`Failed: ${failed.length}`);

  if (failed.length > 0) {
    console.log('\nFailed uploads:');
    failed.forEach(r => console.log(`  - ${r.fileName}: ${r.error}`));
  }

  // Step 7: Save URLs to JSON file
  const urlsFile = path.join(process.cwd(), 'casa-daleese-image-urls.json');
  const urlsData = {
    bucket: bucketName,
    uploadDate: new Date().toISOString(),
    totalFiles: results.length,
    successful: successful.length,
    failed: failed.length,
    urls: successful.map(r => ({
      fileName: r.fileName,
      url: r.url,
    })),
  };

  fs.writeFileSync(urlsFile, JSON.stringify(urlsData, null, 2));
  console.log(`\n✓ Saved URLs to: ${urlsFile}`);

  // Also output just the URLs array for easy copy-paste
  const urlsArray = successful.map(r => r.url);
  console.log('\n=== Image URLs (for code) ===');
  console.log(JSON.stringify(urlsArray, null, 2));

  return results;
}

// Run if called directly
if (require.main === module) {
  const args = process.argv.slice(2);
  const inputDir = args[0] || path.join(process.cwd(), 'hotel-daleese');
  const bucketName = args[1] || 'casa-daleese';
  const replaceMode = args.includes('--replace') || args.includes('-r');

  // Resolve absolute path
  const absoluteInputDir = path.isAbsolute(inputDir)
    ? inputDir
    : path.join(process.cwd(), inputDir);

  uploadImagesToSupabase(absoluteInputDir, bucketName, replaceMode)
    .then((results) => {
      const failed = results.filter(r => !r.success);
      if (failed.length > 0) {
        console.error(`\n⚠️  ${failed.length} upload(s) failed`);
        process.exit(1);
      }
      console.log('\n✓ All uploads completed successfully!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n✗ Upload failed:', error);
      process.exit(1);
    });
}

export { uploadImagesToSupabase };
