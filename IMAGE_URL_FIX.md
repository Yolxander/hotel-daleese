# Fix for Image URL Issues

## The Problem

You have two different URL formats:

1. **Working format** (token-based):
   ```
   https://firebasestorage.googleapis.com/v0/b/sempre-studios-893c8.appspot.com/o/default%2Fuploads%2F673e436317fc5.jpeg?alt=media&token=6da2e7b9-bbae-430b-be63-97fa9cad0591
   ```

2. **Not working format** (signed URLs):
   ```
   https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/67336fd10e763.jpg?GoogleAccessId=...&Expires=...&Signature=...
   ```

## Why Signed URLs Don't Work

- Next.js Image optimization has trouble with signed URLs
- Signed URLs expire and need to be regenerated
- Complex query parameters cause 400 errors

## Solution: Use Token-Based URLs

### Option 1: Get Download URLs from Firebase Console (Quick Fix)

1. Go to [Firebase Console - Storage](https://console.firebase.google.com/u/0/project/sempre-studios-893c8/storage)
2. Click on any image file
3. Click **"Get download URL"** button
4. Copy the URL (it will be in the `firebasestorage.googleapis.com` format)
5. Replace the signed URL in your code with this download URL

### Option 2: Use the API Route (Recommended for Dynamic URLs)

The API route I created (`/api/images`) can generate fresh URLs. However, it currently generates signed URLs. 

**To get token-based URLs instead:**

1. Install Firebase Admin SDK (already added to package.json)
2. Use Firebase Admin's `getDownloadURL()` method
3. Update your components to fetch URLs from the API

### Option 3: Keep Using Signed URLs with `unoptimized={true}`

All your Image components now have `unoptimized={true}` for signed URLs. This should work, but:
- URLs may still expire
- You'll need to regenerate them periodically

## Immediate Fix

For the specific image that's not working:
- Go to Firebase Console
- Find the file: `uploads/67336fd10e763.jpg`
- Get its download URL
- Replace the signed URL in your code

## Long-term Solution

1. Set up Firebase Admin SDK with service account key
2. Use the API route to generate fresh token-based URLs
3. Update components to fetch URLs dynamically instead of hardcoding them

## Next.js Config Updated

I've added `firebasestorage.googleapis.com` to your Next.js image domains, so token-based URLs will work with Next.js Image optimization.

