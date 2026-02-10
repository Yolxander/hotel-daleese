/**
 * Helper to get Hotel Daleese gallery image URLs from Supabase Storage (up to 30 images)
 * Used by the /gallery page FeaturesGalleryComponent
 */

import { unstable_cache } from 'next/cache';
import { listFiles, getPublicUrl } from './supabase-storage';

const BUCKET_NAME = 'hotel-daleese';
const MAX_GALLERY_IMAGES = 30;
const CACHE_TAG = 'hotel-daleese-gallery-urls';
const CACHE_REVALIDATE_SECONDS = 60 * 60; // 1 hour

async function getHotelDaleeseImageUrlsUncached(): Promise<string[]> {
  try {
    const files = await listFiles(BUCKET_NAME);

    const imageFiles = files.filter((file) => {
      const ext = file.split('.').pop()?.toLowerCase();
      return ['jpg', 'jpeg', 'png', 'webp'].includes(ext || '');
    });

    const sorted = [...imageFiles].sort();
    const limited = sorted.slice(0, MAX_GALLERY_IMAGES);
    const urls = limited.map((file) => getPublicUrl(BUCKET_NAME, file));

    if (urls.length > 0) {
      return urls;
    }

    return STATIC_HOTEL_DALEESE_IMAGE_URLS;
  } catch (error) {
    console.error('Error fetching Hotel Daleese gallery images from Supabase:', error);
    return STATIC_HOTEL_DALEESE_IMAGE_URLS;
  }
}

/**
 * Get image URLs from Supabase Storage bucket hotel-daleese (up to 30).
 * Cached so the gallery does not refetch when navigating away and back.
 */
export const getHotelDaleeseImageUrls = unstable_cache(
  getHotelDaleeseImageUrlsUncached,
  [CACHE_TAG],
  { revalidate: CACHE_REVALIDATE_SECONDS, tags: [CACHE_TAG] }
);

/**
 * Static fallback when bucket fetch fails — all 30 from hotel-daleese bucket so gallery always shows
 */
const BUCKET_BASE = 'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese';
export const STATIC_HOTEL_DALEESE_IMAGE_URLS: string[] = [
  `${BUCKET_BASE}/IMG_9625.jpg`,
  `${BUCKET_BASE}/IMG_9621.jpg`,
  `${BUCKET_BASE}/IMG_9618.jpg`,
  `${BUCKET_BASE}/IMG_9617.jpg`,
  `${BUCKET_BASE}/IMG_9613.jpg`,
  `${BUCKET_BASE}/IMG_9580.jpg`,
  `${BUCKET_BASE}/IMG_8791.jpg`,
  `${BUCKET_BASE}/IMG_7629.jpg`,
  `${BUCKET_BASE}/IMG_6559.jpg`,
  `${BUCKET_BASE}/IMG_6558.jpg`,
  `${BUCKET_BASE}/IMG_6343.jpg`,
  `${BUCKET_BASE}/IMG_6339.jpg`,
  `${BUCKET_BASE}/IMG_1632.jpg`,
  `${BUCKET_BASE}/IMG_1631.jpg`,
  `${BUCKET_BASE}/IMG_1630.jpg`,
  `${BUCKET_BASE}/IMG_1628.jpg`,
  `${BUCKET_BASE}/IMG_1627.jpg`,
  `${BUCKET_BASE}/IMG_1625.jpg`,
  `${BUCKET_BASE}/IMG_1611.jpg`,
  `${BUCKET_BASE}/IMG_1610.jpg`,
  `${BUCKET_BASE}/IMG_1609.jpg`,
  `${BUCKET_BASE}/IMG_1162.jpg`,
  `${BUCKET_BASE}/IMG_0843.jpg`,
  `${BUCKET_BASE}/IMG_0842.jpg`,
  `${BUCKET_BASE}/IMG_0646.jpg`,
  `${BUCKET_BASE}/IMG_0644.jpg`,
  `${BUCKET_BASE}/IMG_0638.jpg`,
  `${BUCKET_BASE}/IMG_0635.jpg`,
  `${BUCKET_BASE}/IMG_0632.jpg`,
  `${BUCKET_BASE}/IMG_0508.jpg`,
];
