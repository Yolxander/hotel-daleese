/**
 * Firebase Storage utility for generating download URLs
 * Uses Firebase Admin SDK to get token-based URLs that work better with Next.js Image
 */

import { Storage } from '@google-cloud/storage';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import fs from 'fs';

// Initialize Google Cloud Storage
// Supports both local file and environment variable approaches
const getStorageConfig = () => {
  const projectId = 'sempre-studios-893c8';
  
  // Option 1: Use service account key from environment variable (for production/Vercel)
  if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    try {
      const credentials = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
      return {
        projectId,
        credentials,
      };
    } catch (error) {
      console.error('Error parsing FIREBASE_SERVICE_ACCOUNT_KEY:', error);
    }
  }
  
  // Option 2: Use local service account key file (for development)
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    return {
      projectId,
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    };
  }
  
  // Fallback: Try default locations
  const possiblePaths = [
    './firebase-service-account.json',
    './sempre-studios-893c8-firebase-adminsdk-gkp49-21cb92dca4.json',
  ];
  
  for (const keyPath of possiblePaths) {
    try {
      if (fs.existsSync(keyPath)) {
        return {
          projectId,
          keyFilename: keyPath,
        };
      }
    } catch {
      // Continue to next path
    }
  }
  
  // Last resort: return default
  return {
    projectId,
    keyFilename: './firebase-service-account.json',
  };
};

// Initialize Firebase Admin if not already initialized
const initializeFirebaseAdmin = () => {
  if (getApps().length === 0) {
    const config = getStorageConfig();
    
    if (config.credentials) {
      initializeApp({
        credential: cert(config.credentials),
        storageBucket: 'sempre-studios-893c8.appspot.com',
      });
    } else if (config.keyFilename) {
      initializeApp({
        credential: cert(config.keyFilename),
        storageBucket: 'sempre-studios-893c8.appspot.com',
      });
    } else {
      throw new Error('Firebase Admin credentials not configured');
    }
  }
};

// Initialize on module load
try {
  initializeFirebaseAdmin();
} catch (error) {
  console.warn('Firebase Admin not initialized. Some functions may not work:', error);
}

const storage = new Storage(getStorageConfig());
const bucketName = 'sempre-studios-893c8.appspot.com';
const bucket = storage.bucket(bucketName);

/**
 * Generate a signed read URL for a file in Firebase Storage (via @google-cloud/storage).
 * @param filePath - Path to the file in the bucket (e.g., 'default/uploads/image.jpg')
 */
export async function getDownloadUrl(filePath: string): Promise<string> {
  // Use @google-cloud/storage only. Do not call file.exists() first: the JSON API used by
  // exists() can return 403 (e.g. delinquent billing) even when signing still works, which
  // produced noisy false errors and a redundant fallback path.
  const [url] = await bucket.file(filePath).getSignedUrl({
    action: 'read',
    expires: Date.now() + 31536000 * 1000, // 1 year
  });
  return url;
}

/**
 * Generate a signed URL for a file in Firebase Storage (legacy method)
 * @deprecated Use getDownloadUrl() instead for better Next.js Image compatibility
 * @param filePath - Path to the file in the bucket (e.g., 'default/uploads/image.jpg')
 * @param expiresIn - Expiration time in seconds (default: 1 year) - unused, kept for API compatibility
 * @returns Signed URL that can be used to access the file
 */
export async function getSignedUrl(
  filePath: string,
  expiresIn: number = 31536000 // 1 year in seconds
): Promise<string> {
  // Parameter kept for API compatibility but not used
  void expiresIn;
  return getDownloadUrl(filePath);
}

/**
 * Get multiple signed URLs at once
 */
export async function getSignedUrls(
  filePaths: string[],
  expiresIn: number = 31536000
): Promise<Record<string, string>> {
  const urls: Record<string, string> = {};
  await Promise.all(
    filePaths.map(async (path) => {
      urls[path] = await getSignedUrl(path, expiresIn);
    })
  );
  return urls;
}

/**
 * Upload a file to Firebase Storage
 */
export async function uploadFile(
  localFilePath: string,
  destinationPath: string
): Promise<string> {
  try {
    await bucket.upload(localFilePath, {
      destination: destinationPath,
    });
    return await getSignedUrl(destinationPath);
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}

/**
 * Delete a file from Firebase Storage
 */
export async function deleteFile(filePath: string): Promise<void> {
  try {
    await bucket.file(filePath).delete();
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
}

/**
 * List files in a directory
 */
export async function listFiles(prefix: string): Promise<string[]> {
  try {
    const [files] = await bucket.getFiles({ prefix });
    return files.map((file) => file.name);
  } catch (error) {
    console.error('Error listing files:', error);
    throw error;
  }
}

