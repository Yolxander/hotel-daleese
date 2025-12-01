/**
 * Simple script to regenerate Firebase Storage URLs
 * This version uses Node.js built-in modules only
 * 
 * Usage:
 *   node scripts/regenerate-urls-simple.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Import the Firebase storage utility
// Note: This requires the file to be in a .mjs format or we need to use dynamic import
async function regenerateUrls() {
  console.log('🔍 Regenerating Firebase Storage URLs...\n');
  
  // List of known image paths that need regeneration
  const imagePaths = [
    'default/uploads/67401e51161d4.jpg',
    'default/uploads/6740e5fb6e5b4.jpg',
    'default/uploads/6740e80de5967.jpg',
    'default/uploads/6740e90926e16.jpg',
    'default/uploads/6740eeff3860c.jpg',
    'default/uploads/67401dcf662dd.jpg',
    'default/uploads/6740ef3066d53.jpg',
    'default/uploads/6740e60a653fa.jpg',
    'default/uploads/6740e66acde62.jpg',
    'default/uploads/6740e6464b792.jpg',
    'default/uploads/6740e645b4bb7.jpg',
    'uploads/67336fd10e763.jpg',
    'uploads/Casa Turul/Home/671c830dbadbf.png',
    'uploads/Casa Turul/Our Story/671daa5c98cab.jpeg',
    'uploads/Casa Turul/Blog/671fd74a7475b.jpeg',
    'uploads/Casa Turul/Contact/6720311d840cc.jpg',
    'uploads/Casa Turul/Live in Uvita/671f0d4575be6.jpg',
    'uploads/Casa Turul/Live in Uvita/671f0d44d464f.jpg',
    'uploads/Casa Turul/Live in Uvita/671f0d45281c9.jpg',
    'uploads/Casa Turul/Live in Uvita/671f0d443e66d.jpg',
    'uploads/Casa Turul/Live in Uvita/671f0d43e2643.jpg',
    'uploads/Casa Turul/Live in Uvita/671f10cf23579.jpg',
    'uploads/Casa Turul/Live in Uvita/671f0d42ac32b.jpg',
    'uploads/Casa Turul/Live in Uvita/671f0d439d589.jpg',
    'uploads/Casa Turul/Live in Uvita/671f0d433ca96.jpg',
    'uploads/673653582121f.jpg',
  ];

  console.log(`Found ${imagePaths.length} images to regenerate.\n`);
  console.log('To regenerate URLs, use the API route or Firebase Console.\n');
  console.log('Option 1: Use the API route (requires dev server running):');
  console.log('  curl "http://localhost:3000/api/images?path=default/uploads/67401e51161d4.jpg"\n');
  console.log('Option 2: Use Firebase Console:');
  console.log('  1. Go to https://console.firebase.google.com/u/0/project/sempre-studios-893c8/storage');
  console.log('  2. Find each image file');
  console.log('  3. Click "Get download URL"');
  console.log('  4. Replace the URL in your code\n');
  console.log('Option 3: Run the TypeScript script:');
  console.log('  npm run regenerate-urls\n');
}

regenerateUrls().catch(console.error);

