# Quick Start: Regenerate Image URLs

## Step 1: Get Your Firebase Service Account Key

1. Go to [Firebase Console - Service Accounts](https://console.firebase.google.com/u/0/project/sempre-studios-893c8/settings/serviceaccounts/adminsdk)
2. Click **"Generate new private key"**
3. Save the JSON file as `firebase-service-account.json` in your project root
4. **Important**: This file is already in `.gitignore` - never commit it!

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Regenerate URLs

### Option A: Use the Automated Script (Recommended)

```bash
npm run regenerate-urls
```

This will:
- ✅ Find all Firebase Storage URLs in your code
- ✅ Generate fresh signed URLs
- ✅ Update all files automatically

### Option B: Use the API Route

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. In another terminal, test the API:
   ```bash
   curl "http://localhost:3000/api/images?path=default/uploads/67401e51161d4.jpg"
   ```

3. The response will contain a fresh URL that you can use.

### Option C: Manual (Firebase Console)

1. Go to [Firebase Storage](https://console.firebase.google.com/u/0/project/sempre-studios-893c8/storage)
2. Find each image file
3. Click on it
4. Click **"Get download URL"**
5. Copy the URL and replace it in your code

## Step 4: Restart Your Dev Server

After updating URLs:
```bash
# Stop the server (Ctrl+C) and restart
npm run dev
```

## Troubleshooting

### "Firebase Admin credentials not configured"
- Make sure `firebase-service-account.json` exists in the project root
- Check that the file is valid JSON

### "File not found" errors
- Verify the file path in Firebase Storage
- Paths are case-sensitive and must match exactly

### Script doesn't work
- Make sure you have `tsx` installed: `npm install -D tsx`
- Try running: `npx tsx scripts/regenerate-image-urls.ts`

## What Gets Updated?

The script finds and updates URLs in these formats:
- `https://storage.googleapis.com/sempre-studios-893c8.appspot.com/...?GoogleAccessId=...&Expires=...&Signature=...`

It will replace them with fresh signed URLs that won't expire for 1 year.

## Next Steps

After regenerating URLs:
1. ✅ Test that all images load correctly
2. ✅ Commit your changes (but NOT the service account file!)
3. ✅ Set up environment variables for production (see REGENERATE_URLS.md)

