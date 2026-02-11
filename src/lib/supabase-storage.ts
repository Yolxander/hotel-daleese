/**
 * Supabase Storage utility for uploading files and generating public URLs
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

// Get Supabase configuration from environment variables (lazy evaluation)
function getSupabaseConfig() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return { supabaseUrl, supabaseKey };
}

// Initialize Supabase client (lazy initialization) - prefers service role, falls back to anon
let supabaseClient: ReturnType<typeof createClient> | null = null;

export function getSupabaseClient() {
  if (supabaseClient) {
    return supabaseClient;
  }

  const { supabaseUrl, supabaseKey } = getSupabaseConfig();

  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase URL or key not configured. Some functions may not work.');
    return null;
  }

  supabaseClient = createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });

  return supabaseClient;
}

// Admin client: service role only. Use for storage bucket create/upload so RLS does not block.
let supabaseAdminClient: ReturnType<typeof createClient> | null = null;

export function getSupabaseAdminClient(): ReturnType<typeof createClient> | null {
  if (supabaseAdminClient) {
    return supabaseAdminClient;
  }
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }
  supabaseAdminClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false }
  });
  return supabaseAdminClient;
}

// Removed unused proxy - using getSupabaseClient() directly instead

/**
 * Get public URL for a file in Supabase Storage
 * @param bucketName - Name of the bucket
 * @param filePath - Path to the file in the bucket
 * @returns Public URL for the file
 */
export function getPublicUrl(bucketName: string, filePath: string): string {
  const { supabaseUrl } = getSupabaseConfig();
  
  if (!supabaseUrl) {
    throw new Error('Supabase URL not configured');
  }
  
  // Try using Supabase client if available
  const client = getSupabaseClient();
  if (client) {
    const { data } = client.storage.from(bucketName).getPublicUrl(filePath);
    if (data?.publicUrl) {
      return data.publicUrl;
    }
  }
  
  // Fallback: construct URL manually
  // Format: https://{project-ref}.supabase.co/storage/v1/object/public/{bucket}/{path}
  const cleanPath = filePath.startsWith('/') ? filePath.slice(1) : filePath;
  return `${supabaseUrl}/storage/v1/object/public/${bucketName}/${cleanPath}`;
}

/**
 * Upload a file to Supabase Storage
 * @param bucketName - Name of the bucket
 * @param filePath - Destination path in the bucket
 * @param localFilePath - Local file path to upload
 * @param options - Upload options (contentType, upsert, etc.)
 * @returns Public URL of the uploaded file
 */
export async function uploadFile(
  bucketName: string,
  filePath: string,
  localFilePath: string,
  options?: {
    contentType?: string;
    upsert?: boolean;
  }
): Promise<string> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    throw new Error('Supabase client not initialized');
  }

  // Read file from local filesystem
  const fileBuffer = fs.readFileSync(localFilePath);
  const fileName = filePath.split('/').pop() || filePath;
  
  // Determine content type
  const contentType = options?.contentType || getContentType(fileName);

  // Upload file
  const { error } = await supabase.storage
    .from(bucketName)
    .upload(filePath, fileBuffer, {
      contentType,
      upsert: options?.upsert ?? true,
    });

  if (error) {
    throw new Error(`Failed to upload file: ${error.message}`);
  }

  // Return public URL
  return getPublicUrl(bucketName, filePath);
}

/**
 * Upload a file buffer to Supabase Storage
 * @param bucketName - Name of the bucket
 * @param filePath - Destination path in the bucket
 * @param fileBuffer - File buffer to upload
 * @param options - Upload options
 * @returns Public URL of the uploaded file
 */
export async function uploadBuffer(
  bucketName: string,
  filePath: string,
  fileBuffer: Buffer,
  options?: {
    contentType?: string;
    upsert?: boolean;
  }
): Promise<string> {
  // Prefer admin (service role) so uploads bypass storage RLS
  const supabase = getSupabaseAdminClient() ?? getSupabaseClient();
  if (!supabase) {
    throw new Error('Supabase client not initialized');
  }

  const fileName = filePath.split('/').pop() || filePath;
  const contentType = options?.contentType || getContentType(fileName);

  const { error } = await supabase.storage
    .from(bucketName)
    .upload(filePath, fileBuffer, {
      contentType,
      upsert: options?.upsert ?? true,
    });

  if (error) {
    throw new Error(`Failed to upload file: ${error.message}`);
  }

  return getPublicUrl(bucketName, filePath);
}

/**
 * Check if a bucket exists. Uses service role so RLS does not block.
 */
export async function bucketExists(bucketName: string): Promise<boolean> {
  const supabase = getSupabaseAdminClient() ?? getSupabaseClient();
  if (!supabase) {
    throw new Error('Supabase client not initialized');
  }

  const { data, error } = await supabase.storage.listBuckets();

  if (error) {
    throw new Error(`Failed to list buckets: ${error.message}`);
  }

  return data?.some(bucket => bucket.name === bucketName) ?? false;
}

const BUCKET_CREATE_REQUIRES_SERVICE_ROLE =
  'Creating storage buckets requires SUPABASE_SERVICE_ROLE_KEY in .env.local (bypasses RLS).';

/**
 * Create a bucket if it doesn't exist. Uses service role only so RLS does not block.
 * @param bucketName - Name of the bucket
 * @param isPublic - Whether the bucket should be public (default: true)
 * @returns True if bucket was created, false if it already exists
 */
export async function createBucketIfNotExists(
  bucketName: string,
  isPublic: boolean = true
): Promise<boolean> {
  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    throw new Error(BUCKET_CREATE_REQUIRES_SERVICE_ROLE);
  }

  const exists = await bucketExists(bucketName);

  if (exists) {
    return false;
  }

  const { error } = await supabase.storage.createBucket(bucketName, {
    public: isPublic,
  });

  if (error) {
    throw new Error(`Failed to create bucket: ${error.message}`);
  }

  return true;
}

/**
 * List files in a bucket with a prefix
 * @param bucketName - Name of the bucket
 * @param prefix - Prefix to filter files (optional)
 * @returns Array of file paths
 */
export async function listFiles(
  bucketName: string,
  prefix?: string
): Promise<string[]> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    throw new Error('Supabase client not initialized');
  }

  const { data, error } = await supabase.storage
    .from(bucketName)
    .list(prefix || '', {
      limit: 1000,
      sortBy: { column: 'name', order: 'asc' },
    });

  if (error) {
    throw new Error(`Failed to list files: ${error.message}`);
  }

  return data?.map(file => prefix ? `${prefix}/${file.name}` : file.name) || [];
}

/**
 * Delete a file from Supabase Storage
 * @param bucketName - Name of the bucket
 * @param filePath - Path to the file in the bucket
 */
export async function deleteFile(bucketName: string, filePath: string): Promise<void> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    throw new Error('Supabase client not initialized');
  }

  const { error } = await supabase.storage
    .from(bucketName)
    .remove([filePath]);

  if (error) {
    throw new Error(`Failed to delete file: ${error.message}`);
  }
}

/**
 * Delete all files in a bucket
 * @param bucketName - Name of the bucket
 * @param prefix - Optional prefix to filter files to delete
 * @returns Number of files deleted
 */
export async function deleteAllFiles(
  bucketName: string,
  prefix?: string
): Promise<number> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    throw new Error('Supabase client not initialized');
  }

  // List all files in the bucket
  const files = await listFiles(bucketName, prefix);
  
  if (files.length === 0) {
    return 0;
  }

  // Delete files in batches (Supabase may have limits)
  const batchSize = 100;
  let deletedCount = 0;

  for (let i = 0; i < files.length; i += batchSize) {
    const batch = files.slice(i, i + batchSize);
    
    const { error } = await supabase.storage
      .from(bucketName)
      .remove(batch);

    if (error) {
      console.warn(`Failed to delete batch starting at ${i}: ${error.message}`);
      // Continue with next batch even if this one fails
    } else {
      deletedCount += batch.length;
    }
  }

  return deletedCount;
}

/**
 * Get content type from file extension
 */
function getContentType(fileName: string): string {
  const ext = fileName.split('.').pop()?.toLowerCase();
  
  const contentTypes: Record<string, string> = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    webp: 'image/webp',
    heic: 'image/heic',
    heif: 'image/heif',
  };

  return contentTypes[ext || ''] || 'application/octet-stream';
}
