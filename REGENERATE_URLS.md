# Regenerate Firebase Storage Image URLs

This guide shows you how to regenerate all expired Firebase Storage image URLs in your codebase.

## Prerequisites

1. **Firebase Admin SDK Setup**
   - You need a Firebase service account key file
   - Place it at: `./firebase-service-account.json`
   - OR set environment variable: `FIREBASE_SERVICE_ACCOUNT_KEY` (base64 encoded JSON)

2. **Install Dependencies**
   ```bash
   npm install
   ```

## Option 1: Using the Script (Recommended)

The script automatically finds all Firebase Storage URLs and regenerates them:

```bash
# Install tsx if not already installed
npm install -D tsx

# Run the regeneration script
npx tsx scripts/regenerate-image-urls.ts
```

The script will:
1. ✅ Find all Firebase Storage URLs in your `src/` directory
2. ✅ Generate fresh signed URLs for each image
3. ✅ Update all files automatically

## Option 2: Manual Regeneration via API

You can also use the API route to get fresh URLs:

```bash
# Get URL for a single image
curl "http://localhost:3000/api/images?path=default/uploads/67401e51161d4.jpg"

# Get URLs for multiple images
curl "http://localhost:3000/api/images?paths=default/uploads/image1.jpg,default/uploads/image2.jpg"
```

## Option 3: Using Firebase Console

1. Go to [Firebase Console - Storage](https://console.firebase.google.com/u/0/project/sempre-studios-893c8/storage)
2. Find the image file
3. Click on it
4. Click "Get download URL"
5. Copy the URL and replace it in your code

## Getting Your Service Account Key

1. Go to [Firebase Console - Project Settings](https://console.firebase.google.com/u/0/project/sempre-studios-893c8/settings/serviceaccounts/adminsdk)
2. Click "Generate new private key"
3. Save the JSON file as `firebase-service-account.json` in your project root
4. **Important**: Add `firebase-service-account.json` to `.gitignore`!

## Environment Variables (For Production/Vercel)

For production deployments, use environment variables instead of a file:

1. Base64 encode your service account JSON:
   ```bash
   cat firebase-service-account.json | base64
   ```

2. Add to your environment variables:
   ```
   FIREBASE_SERVICE_ACCOUNT_KEY=<base64-encoded-json>
   ```

## Troubleshooting

### Error: "Firebase Admin credentials not configured"
- Make sure `firebase-service-account.json` exists in the project root
- OR set `FIREBASE_SERVICE_ACCOUNT_KEY` environment variable

### Error: "File not found"
- Check that the file path in Firebase Storage matches exactly
- Paths are case-sensitive

### URLs still not working
- Make sure you've restarted your dev server after updating URLs
- Check that `unoptimized={true}` is set on all Image components using signed URLs

## Next Steps

After regenerating URLs:
1. ✅ Restart your dev server
2. ✅ Test that images load correctly
3. ✅ Consider setting up automatic URL regeneration (future enhancement)

