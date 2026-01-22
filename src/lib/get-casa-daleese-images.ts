/**
 * Helper to get Casa Daleese image URLs from Supabase Storage
 * Can fetch dynamically or use a static list
 */

import { listFiles, getPublicUrl } from './supabase-storage';

const BUCKET_NAME = 'casa-daleese';

/**
 * Get all image URLs from Supabase Storage bucket
 */
export async function getCasaDaleeseImageUrls(): Promise<string[]> {
  try {
    const files = await listFiles(BUCKET_NAME);
    
    // Filter for image files and generate public URLs
    const imageFiles = files.filter(file => {
      const ext = file.split('.').pop()?.toLowerCase();
      return ['jpg', 'jpeg', 'png', 'webp'].includes(ext || '');
    });

    const urls = imageFiles.map(file => getPublicUrl(BUCKET_NAME, file));
    
    // Sort by filename for consistent ordering
    return urls.sort();
  } catch (error) {
    console.error('Error fetching Casa Daleese images:', error);
    // Return empty array on error
    return [];
  }
}

/**
 * Static fallback URLs (will be populated after running upload script)
 * This can be updated manually or via the upload script output
 */
export const STATIC_CASA_DALEESE_IMAGE_URLS: string[] = [
  // URLs will be populated here after running the upload script
  // For now, this serves as a fallback
];
