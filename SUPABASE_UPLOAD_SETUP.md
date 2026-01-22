# Supabase Image Upload Setup Guide

This guide explains how to upload HEIC images to Supabase Storage and display them in the Casa Daleese page.

## Prerequisites

1. **Install Dependencies**
   ```bash
   npm install
   ```
   This will install:
   - `@supabase/supabase-js` - Supabase client library
   - `sharp` - Fast image processing (with HEIC support if available)
   - `heic-convert` - Fallback HEIC converter (pure JavaScript)

2. **Environment Variables**
   
   Create or update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://kvirwlcodrpwnwzvfcqr.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   ```
   
   For server-side uploads (scripts), you can also use:
   ```env
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   ```
   
   **Note:** The service role key has elevated permissions and should only be used server-side. Never expose it in client-side code.

## Uploading Images

### Step 1: Run the Upload Script

The upload script will:
1. Convert all HEIC images to JPG format
2. Create the `casa-daleese` bucket if it doesn't exist
3. Upload all images to Supabase Storage
4. Generate a JSON file with all image URLs

```bash
npx tsx scripts/upload-to-supabase.ts [input-dir] [bucket-name]
```

**Example:**
```bash
# Upload from hotel-daleese directory to casa-daleese bucket
npx tsx scripts/upload-to-supabase.ts hotel-daleese casa-daleese

# Or use absolute path
npx tsx scripts/upload-to-supabase.ts /Users/humancontact/Downloads/demos/nextjs/hotel-daleese/hotel-daleese casa-daleese
```

### Step 2: Verify Upload

After running the script, you should see:
- A summary of successful/failed uploads
- A file `casa-daleese-image-urls.json` with all image URLs
- Console output with all image URLs

### Step 3: Update Static URLs (Optional)

If you want to use static URLs instead of fetching dynamically, you can update `src/lib/get-casa-daleese-images.ts`:

```typescript
export const STATIC_CASA_DALEESE_IMAGE_URLS: string[] = [
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0508.jpg',
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/casa-daleese/IMG_0632.jpg',
  // ... more URLs
];
```

## How It Works

### Image Conversion

The script uses two methods for HEIC conversion:
1. **sharp** (preferred) - Fast, native library. Requires HEIC codec support.
2. **heic-convert** (fallback) - Pure JavaScript, works everywhere but slower.

The script automatically detects which method is available and uses the best one.

### Storage Structure

- **Bucket:** `casa-daleese` (public)
- **File paths:** Root of bucket (e.g., `IMG_0508.jpg`)
- **URL format:** `https://{project-ref}.supabase.co/storage/v1/object/public/{bucket}/{filename}`

### Page Display

The Casa Daleese page (`/suites/casa-daleese`) automatically:
1. Fetches image URLs from Supabase Storage at build time
2. Falls back to static URLs if fetch fails
3. Displays images in the gallery component

## Troubleshooting

### HEIC Conversion Fails

If `sharp` doesn't support HEIC on your system:
- The script will automatically fall back to `heic-convert`
- Or install HEIC support for sharp:
  ```bash
  # macOS
  brew install libheif libvips libde265 x265
  npm rebuild sharp
  ```

### Upload Fails

Common issues:
1. **Missing environment variables** - Check `.env.local`
2. **Bucket doesn't exist** - The script creates it automatically
3. **Permission errors** - Ensure you're using the correct API key
4. **Network issues** - Check your internet connection

### Images Don't Display

1. **Check bucket is public** - Run:
   ```sql
   SELECT name, public FROM storage.buckets WHERE name = 'casa-daleese';
   ```
   Should return `public = true`

2. **Verify URLs** - Check the generated URLs in `casa-daleese-image-urls.json`

3. **Check browser console** - Look for CORS or 404 errors

## Files Created

- `src/lib/supabase-storage.ts` - Supabase Storage utility functions
- `src/lib/get-casa-daleese-images.ts` - Helper to fetch Casa Daleese images
- `scripts/convert-heic-to-jpg.ts` - HEIC to JPG conversion script
- `scripts/upload-to-supabase.ts` - Main upload script
- `casa-daleese-image-urls.json` - Generated file with all image URLs

## Next Steps

After uploading images:
1. Verify images display correctly on `/suites/casa-daleese`
2. Test the lightbox gallery functionality
3. Consider optimizing images for web (compression, resizing)
4. Update other suite pages if needed
