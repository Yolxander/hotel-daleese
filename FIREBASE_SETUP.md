# Firebase Storage Setup Guide

This guide explains how to set up Firebase Storage access and handle expiring signed URLs.

## Step 1: Get Access to Firebase Project

### Option A: Get Added as a Project Member

1. Ask the project owner to add you:
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Select project: `sempre-studios-893c8`
   - Click ⚙️ **Project Settings** → **Users and permissions**
   - Click **Add member**
   - Enter your email and assign role (Editor or Owner)

### Option B: Get Service Account Key (For Programmatic Access)

1. Ask the project owner to:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Select project: `sempre-studios-893c8`
   - Navigate to **IAM & Admin** → **Service Accounts**
   - Find: `firebase-adminsdk-gkp49@sempre-studios-893c8.iam.gserviceaccount.com`
   - Click **Actions** → **Manage Keys**
   - Click **Add Key** → **Create new key** → **JSON**
   - Download the JSON file (keep it secure!)

2. Save the file as `firebase-service-account.json` in the project root
   - **IMPORTANT**: This file is already in `.gitignore` - never commit it!

## Step 2: Install Required Packages

```bash
npm install @google-cloud/storage
```

## Step 3: Set Up Environment Variables

Create a `.env.local` file in the project root:

```env
# Path to your service account JSON file
GOOGLE_APPLICATION_CREDENTIALS=./firebase-service-account.json

# OR use the JSON content directly (for Vercel/deployment)
# FIREBASE_SERVICE_ACCOUNT_KEY='{"type":"service_account",...}'
```

## Step 4: Update Your Code to Use Dynamic URLs

Instead of hardcoding signed URLs, use the API route:

### Example: Fetching a single image URL

```typescript
// In your component
const [imageUrl, setImageUrl] = useState<string>('');

useEffect(() => {
  fetch('/api/images?path=default/uploads/673de7f57a89b.jpg')
    .then(res => res.json())
    .then(data => setImageUrl(data.url));
}, []);
```

### Example: Fetching multiple image URLs

```typescript
const paths = [
  'default/uploads/673de7f57a89b.jpg',
  'default/uploads/673eaf00ea361.jpg',
  'uploads/Casa Turul/Home/671c830dbadbf.png'
];

fetch(`/api/images?paths=${paths.join(',')}`)
  .then(res => res.json())
  .then(data => {
    // data.urls is an object: { 'path': 'signed-url', ... }
    console.log(data.urls);
  });
```

## Step 5: For Production (Vercel/Deployment)

1. **Upload service account key to Vercel:**
   - Go to your Vercel project settings
   - Navigate to **Environment Variables**
   - Add `FIREBASE_SERVICE_ACCOUNT_KEY` with the JSON content as value

2. **Update `firebase-storage.ts`** to use environment variable:

```typescript
const storage = new Storage({
  projectId: 'sempre-studios-893c8',
  credentials: JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '{}'),
});
```

## Understanding Signed URLs

- **What they are**: Temporary URLs that allow access to private files
- **Why they expire**: Security measure to prevent unauthorized access
- **Expiration time**: Your current URLs expire after a set time (see `Expires=` parameter)
- **Solution**: Generate new URLs dynamically using the service account

## Current Service Account

Your project uses:
- **Service Account**: `firebase-adminsdk-gkp49@sempre-studios-893c8.iam.gserviceaccount.com`
- **Project ID**: `sempre-studios-893c8`
- **Bucket**: `sempre-studios-893c8.appspot.com`

## Troubleshooting

### "Permission denied" error
- Make sure you have the service account key file
- Verify the key has Storage Admin permissions
- Check that `GOOGLE_APPLICATION_CREDENTIALS` points to the correct file

### URLs still expiring
- The API route generates fresh URLs on each request
- Consider caching URLs client-side for a reasonable time (e.g., 1 hour)
- Or use the `getSignedUrl` function directly in server components

### Can't access Firebase Console
- Contact the project owner to add you as a member
- Or ask them to generate the service account key for you

