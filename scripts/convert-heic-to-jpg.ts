/**
 * Script to convert HEIC images to JPG format
 * Uses sharp first (faster), falls back to heic-convert if HEIC support is missing
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Try to import sharp
let sharp: any = null;
try {
  sharp = require('sharp');
} catch (e) {
  console.warn('sharp not available, will use heic-convert fallback');
}

// Try to import heic-convert
let heicConvert: any = null;
try {
  heicConvert = require('heic-convert');
} catch (e) {
  console.warn('heic-convert not available');
}

interface ConversionResult {
  inputPath: string;
  outputPath: string;
  success: boolean;
  error?: string;
}

/**
 * Check if sharp supports HEIC
 */
function checkSharpHeicSupport(): boolean {
  if (!sharp) return false;
  
  try {
    const format = sharp.format;
    return format?.heif?.input === true;
  } catch {
    return false;
  }
}

/**
 * Convert HEIC to JPG using sharp
 */
async function convertWithSharp(
  inputPath: string,
  outputPath: string,
  quality: number = 90
): Promise<void> {
  if (!sharp) {
    throw new Error('sharp not available');
  }

  await sharp(inputPath)
    .jpeg({ quality })
    .toFile(outputPath);
}

/**
 * Convert HEIC to JPG using heic-convert
 */
async function convertWithHeicConvert(
  inputPath: string,
  outputPath: string,
  quality: number = 0.9
): Promise<void> {
  if (!heicConvert) {
    throw new Error('heic-convert not available');
  }

  const inputBuffer = await fs.promises.readFile(inputPath);
  const outputBuffer = await heicConvert({
    buffer: inputBuffer,
    format: 'JPEG',
    quality,
  });
  
  await fs.promises.writeFile(outputPath, outputBuffer);
}

/**
 * Convert a single HEIC file to JPG
 */
async function convertFile(
  inputPath: string,
  outputDir: string
): Promise<ConversionResult> {
  const fileName = path.basename(inputPath, path.extname(inputPath));
  const outputPath = path.join(outputDir, `${fileName}.jpg`);

  try {
    // Try sharp first if available and supports HEIC
    if (sharp && checkSharpHeicSupport()) {
      await convertWithSharp(inputPath, outputPath);
      return { inputPath, outputPath, success: true };
    }

    // Fallback to heic-convert
    if (heicConvert) {
      await convertWithHeicConvert(inputPath, outputPath);
      return { inputPath, outputPath, success: true };
    }

    throw new Error('No HEIC conversion library available');
  } catch (error: any) {
    return {
      inputPath,
      outputPath,
      success: false,
      error: error.message || String(error),
    };
  }
}

/**
 * Main conversion function
 */
async function convertHeicToJpg(
  inputDir: string,
  outputDir?: string
): Promise<ConversionResult[]> {
  // Use outputDir or create a temp directory
  const finalOutputDir = outputDir || path.join(inputDir, 'converted');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(finalOutputDir)) {
    fs.mkdirSync(finalOutputDir, { recursive: true });
  }

  // Find all HEIC files (case-insensitive)
  const heicFiles = await glob('**/*.{heic,HEIC}', {
    cwd: inputDir,
    absolute: true,
  });

  console.log(`Found ${heicFiles.length} HEIC files to convert`);

  if (heicFiles.length === 0) {
    console.log('No HEIC files found');
    return [];
  }

  // Check conversion library availability
  if (!sharp && !heicConvert) {
    throw new Error(
      'Neither sharp nor heic-convert is available. Please install one of them.'
    );
  }

  if (sharp && checkSharpHeicSupport()) {
    console.log('Using sharp for conversion (fast)');
  } else if (heicConvert) {
    console.log('Using heic-convert for conversion (slower but works everywhere)');
  }

  // Convert all files
  const results: ConversionResult[] = [];
  
  for (let i = 0; i < heicFiles.length; i++) {
    const file = heicFiles[i];
    console.log(`Converting ${i + 1}/${heicFiles.length}: ${path.basename(file)}`);
    
    const result = await convertFile(file, finalOutputDir);
    results.push(result);
    
    if (result.success) {
      console.log(`  ✓ Converted to ${path.basename(result.outputPath)}`);
    } else {
      console.error(`  ✗ Failed: ${result.error}`);
    }
  }

  // Summary
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  console.log('\n=== Conversion Summary ===');
  console.log(`Total files: ${results.length}`);
  console.log(`Successful: ${successful}`);
  console.log(`Failed: ${failed}`);
  console.log(`Output directory: ${finalOutputDir}`);

  return results;
}

// Run if called directly
if (require.main === module) {
  const inputDir = process.argv[2] || path.join(process.cwd(), 'hotel-daleese');
  const outputDir = process.argv[3];

  convertHeicToJpg(inputDir, outputDir)
    .then((results) => {
      const failed = results.filter(r => !r.success);
      if (failed.length > 0) {
        console.error('\nSome conversions failed:');
        failed.forEach(r => console.error(`  - ${r.inputPath}: ${r.error}`));
        process.exit(1);
      }
      process.exit(0);
    })
    .catch((error) => {
      console.error('Conversion error:', error);
      process.exit(1);
    });
}

export { convertHeicToJpg, convertFile };
