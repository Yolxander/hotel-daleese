/**
 * Script to delete old Casa Daleese images from Supabase Storage
 * Keeps only the new images (IMG_0787 to IMG_0891)
 */

// Load environment variables
import { config } from 'dotenv';
import { resolve } from 'path';
import { existsSync } from 'fs';

const envLocalPath = resolve(process.cwd(), '.env.local');
if (existsSync(envLocalPath)) {
  config({ path: envLocalPath });
}

import { listFiles, deleteFile } from '../src/lib/supabase-storage';

const BUCKET_NAME = 'casa-daleese';

// Old image patterns to delete
const OLD_IMAGE_PATTERNS = [
  'IMG_1162', 'IMG_1609', 'IMG_1610', 'IMG_1611',
  'IMG_1625', 'IMG_1627', 'IMG_1628', 'IMG_1630', 'IMG_1631', 'IMG_1632',
  'IMG_6339', 'IMG_6343', 'IMG_6558', 'IMG_6559',
  'IMG_7629', 'IMG_7638', 'IMG_8791', 'IMG_9580',
  'IMG_9613', 'IMG_9617', 'IMG_9618', 'IMG_9621', 'IMG_9625',
];

async function cleanupOldImages() {
  console.log('=== Cleaning up old Casa Daleese images ===\n');

  try {
    const allFiles = await listFiles(BUCKET_NAME);
    console.log(`Found ${allFiles.length} total files in bucket\n`);

    // Find old images to delete
    const oldImages = allFiles.filter(file => {
      return OLD_IMAGE_PATTERNS.some(pattern => 
        file.toUpperCase().startsWith(pattern.toUpperCase())
      );
    });

    if (oldImages.length === 0) {
      console.log('No old images found to delete');
      return;
    }

    console.log(`Found ${oldImages.length} old images to delete:\n`);
    oldImages.forEach(file => console.log(`  - ${file}`));
    console.log('');

    // Delete old images
    let deletedCount = 0;
    let failedCount = 0;

    for (const file of oldImages) {
      try {
        await deleteFile(BUCKET_NAME, file);
        console.log(`✓ Deleted: ${file}`);
        deletedCount++;
      } catch (error: any) {
        console.error(`✗ Failed to delete ${file}: ${error.message}`);
        failedCount++;
      }
    }

    console.log(`\n=== Cleanup Summary ===`);
    console.log(`Total old images: ${oldImages.length}`);
    console.log(`Successfully deleted: ${deletedCount}`);
    console.log(`Failed: ${failedCount}`);

    // Verify remaining files
    const remainingFiles = await listFiles(BUCKET_NAME);
    console.log(`\nRemaining files in bucket: ${remainingFiles.length}`);
  } catch (error: any) {
    console.error('Cleanup failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  cleanupOldImages()
    .then(() => {
      console.log('\n✓ Cleanup completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n✗ Cleanup failed:', error);
      process.exit(1);
    });
}

export { cleanupOldImages };
