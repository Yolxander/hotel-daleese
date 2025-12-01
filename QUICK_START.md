# Quick Start: Firebase Access & Signed URLs

## 🚀 Quick Steps

### 1. Get Service Account Key

**Ask the project owner to:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/iam-admin/serviceaccounts?project=sempre-studios-893c8)
2. Find service account: `firebase-adminsdk-gkp49@sempre-studios-893c8.iam.gserviceaccount.com`
3. Create new key → Download JSON
4. Share the JSON file with you (securely!)

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Credentials

**For Local Development:**
1. Save the JSON file as `firebase-service-account.json` in project root
2. Create `.env.local`:
   ```env
   GOOGLE_APPLICATION_CREDENTIALS=./firebase-service-account.json
   ```

**For Production (Vercel):**
1. Go to Vercel project → Settings → Environment Variables
2. Add: `FIREBASE_SERVICE_ACCOUNT_KEY` = (paste entire JSON content)

### 4. Use Dynamic URLs

Instead of hardcoded URLs, fetch them dynamically:

```typescript
// Get a single image URL
const response = await fetch('/api/images?path=default/uploads/673de7f57a89b.jpg');
const { url } = await response.json();
```

## 📋 What You Get

✅ **No more expired URLs** - Generated fresh on each request  
✅ **Secure access** - Uses service account authentication  
✅ **Easy to use** - Simple API endpoint  
✅ **Production ready** - Works with Vercel environment variables  

## 🔒 Security Notes

- **Never commit** `firebase-service-account.json` to git (already in `.gitignore`)
- **Never share** service account keys publicly
- **Rotate keys** if accidentally exposed

## 📚 Full Documentation

See `FIREBASE_SETUP.md` for detailed instructions.

