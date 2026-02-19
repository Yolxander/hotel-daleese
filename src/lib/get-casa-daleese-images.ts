/**
 * Helper to get Casa Daleese image URLs from Supabase Storage
 * Can fetch dynamically or use a static list
 */

import { unstable_cache } from 'next/cache';
import { listFiles, getPublicUrl } from './supabase-storage';

const BUCKET_NAME = 'casa-daleese';
const CACHE_TAG = 'casa-daleese-gallery-urls';
const CACHE_REVALIDATE_SECONDS = 60 * 60; // 1 hour
const SUPABASE_FETCH_TIMEOUT_MS = 8000; // 8s then fallback to static

function withTimeout<T>(promise: Promise<T>, ms: number, fallback: T): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error('Supabase fetch timeout')), ms)
    ),
  ]).catch(() => fallback);
}

async function getCasaDaleeseImageUrlsUncached(): Promise<string[]> {
  try {
    const files = await withTimeout(
      listFiles(BUCKET_NAME),
      SUPABASE_FETCH_TIMEOUT_MS,
      [] as string[]
    );
    if (files.length === 0) return STATIC_CASA_DALEESE_IMAGE_URLS;
    
    // Filter for image files and only include new Casa Daleese images (IMG_0787 to IMG_0891)
    const imageFiles = files.filter(file => {
      const ext = file.split('.').pop()?.toLowerCase();
      if (!['jpg', 'jpeg', 'png', 'webp'].includes(ext || '')) {
        return false;
      }
      
      // Extract the number from filename (e.g., "IMG_0787.jpg" -> 787)
      const match = file.match(/IMG_(\d+)\./i);
      if (!match) {
        return false;
      }
      
      const num = parseInt(match[1], 10);
      // Only include images in the new range: 0787 to 0891
      return num >= 787 && num <= 891;
    });

    if (imageFiles.length === 0) {
      console.warn('No new Casa Daleese images found in Supabase bucket, using static URLs');
      return STATIC_CASA_DALEESE_IMAGE_URLS;
    }

    const urls = imageFiles.map(file => getPublicUrl(BUCKET_NAME, file));
    const sortedUrls = urls.sort();
    return sortedUrls;
  } catch {
    return STATIC_CASA_DALEESE_IMAGE_URLS;
  }
}

/**
 * Get image URLs from Supabase with caching (1h) and timeout (8s) to avoid slow/blocked builds and requests.
 */
export const getCasaDaleeseImageUrls = unstable_cache(
  getCasaDaleeseImageUrlsUncached,
  [CACHE_TAG],
  { revalidate: CACHE_REVALIDATE_SECONDS, tags: [CACHE_TAG] }
);

/**
 * SPA / highlight images (separate from main gallery)
 */
export const SPA_CASA_DALEESE_IMAGE_URLS: string[] = [
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0838.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0868.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0842.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0841.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0843.jpg',
];

/**
 * Static fallback URLs (will be populated after running upload script)
 * This can be updated manually or via the upload script output
 */
export const STATIC_CASA_DALEESE_IMAGE_URLS: string[] = [
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0787.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0789.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0811.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0812.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0814.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0832.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0833.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0834.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0835.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0844.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0845.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0848.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0849.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0850.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0853.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0854.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0855.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0856.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0857.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0858.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0860.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0861.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0862.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0863.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0864.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0865.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0866.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0867.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0870.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0874.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0875.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0876.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0878.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0879.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0880.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0882.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0884.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0885.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0887.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0888.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0891.jpg',
];
