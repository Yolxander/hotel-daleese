/**
 * Script to regenerate all Firebase Storage image URLs
 * This script finds all hardcoded signed URLs in your codebase and generates fresh ones
 * 
 * Usage:
 *   npx tsx scripts/regenerate-image-urls.ts
 * 
 * Or with ts-node:
 *   ts-node scripts/regenerate-image-urls.ts
 */

import { getDownloadUrl } from '../src/lib/firebase-storage';
import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';
import { promisify } from 'util';

interface ImageUrl {
  filePath: string; // Path in Firebase Storage
  oldUrl: string;   // Old signed URL
  newUrl: string;   // New generated URL
  fileLocation: string; // File where it's used
  lineNumber: number;
}

/**
 * Extract file path from a Firebase Storage URL
 */
function extractFilePath(url: string): string | null {
  // Match patterns like:
  // - storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/xxx.jpg?...
  // - storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/xxx.jpg?...
  
  const match = url.match(/storage\.googleapis\.com\/sempre-studios-893c8\.appspot\.com\/([^?]+)/);
  if (match) {
    return decodeURIComponent(match[1]);
  }
  return null;
}

/**
 * Find all Firebase Storage URLs in the codebase
 */
async function findImageUrls(): Promise<ImageUrl[]> {
  const imageUrls: ImageUrl[] = [];
  const srcDir = path.join(process.cwd(), 'src');
  
  // Find all TypeScript/TSX files
  const files = await glob('**/*.{ts,tsx}', {
    cwd: srcDir,
    ignore: ['**/*.d.ts', '**/node_modules/**', '**/.next/**'],
  });
  
  for (const file of files) {
    const filePath = path.join(srcDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    
    // Match Firebase Storage URLs
    const urlRegex = /https:\/\/storage\.googleapis\.com\/sempre-studios-893c8\.appspot\.com\/[^"'\s)]+/g;
    
    lines.forEach((line, index) => {
      const matches = line.match(urlRegex);
      if (matches) {
        matches.forEach((url) => {
          const filePath = extractFilePath(url);
          if (filePath) {
            imageUrls.push({
              filePath,
              oldUrl: url,
              newUrl: '', // Will be generated
              fileLocation: file,
              lineNumber: index + 1,
            });
          }
        });
      }
    });
  }
  
  return imageUrls;
}

/**
 * Generate new URLs for all images
 */
async function generateNewUrls(imageUrls: ImageUrl[]): Promise<void> {
  console.log(`\nFound ${imageUrls.length} image URLs to regenerate...\n`);
  
  // Group by file path to avoid duplicates
  const uniquePaths = new Map<string, ImageUrl[]>();
  imageUrls.forEach((item) => {
    if (!uniquePaths.has(item.filePath)) {
      uniquePaths.set(item.filePath, []);
    }
    uniquePaths.get(item.filePath)!.push(item);
  });
  
  console.log(`Generating URLs for ${uniquePaths.size} unique files...\n`);
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const [filePath, items] of uniquePaths.entries()) {
    try {
      console.log(`Generating URL for: ${filePath}`);
      const newUrl = await getDownloadUrl(filePath);
      
      // Update all items with this file path
      items.forEach((item) => {
        item.newUrl = newUrl;
      });
      
      successCount++;
      console.log(`  ✓ Generated: ${newUrl.substring(0, 80)}...\n`);
    } catch (error) {
      errorCount++;
      console.error(`  ✗ Error generating URL for ${filePath}:`, error);
      console.log('');
    }
  }
  
  console.log(`\nSummary: ${successCount} succeeded, ${errorCount} failed\n`);
}

/**
 * Update files with new URLs
 */
async function updateFiles(imageUrls: ImageUrl[]): Promise<void> {
  // Group by file location
  const filesToUpdate = new Map<string, ImageUrl[]>();
  
  imageUrls.forEach((item) => {
    if (!item.newUrl) return; // Skip if URL generation failed
    
    const filePath = path.join(process.cwd(), 'src', item.fileLocation);
    if (!filesToUpdate.has(filePath)) {
      filesToUpdate.set(filePath, []);
    }
    filesToUpdate.get(filePath)!.push(item);
  });
  
  console.log(`Updating ${filesToUpdate.size} files...\n`);
  
  for (const [filePath, items] of filesToUpdate.entries()) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let updated = false;
    
    items.forEach((item) => {
      // Escape special regex characters in the old URL
      const escapedOldUrl = item.oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedOldUrl, 'g');
      
      if (regex.test(content)) {
        content = content.replace(regex, item.newUrl);
        updated = true;
        console.log(`  ✓ Updated line ${item.lineNumber} in ${item.fileLocation}`);
      }
    });
    
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`  ✓ Saved: ${path.basename(filePath)}\n`);
    }
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🔍 Finding all Firebase Storage image URLs...\n');
  
  try {
    // Find all image URLs
    const imageUrls = await findImageUrls();
    
    if (imageUrls.length === 0) {
      console.log('No Firebase Storage URLs found in the codebase.');
      return;
    }
    
    // Generate new URLs
    await generateNewUrls(imageUrls);
    
    // Update files
    await updateFiles(imageUrls);
    
    console.log('✅ Done! All URLs have been regenerated.');
    console.log('\n⚠️  Note: Make sure to restart your dev server to see the changes.');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

// Run the script
main();

