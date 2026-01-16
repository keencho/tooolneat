const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Create manifest.json
const manifest = {
  "name": "Toolneat",
  "short_name": "Toolneat",
  "description": "Free online tools for developers and everyday life",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2563eb",
  "icons": [
    {
      "src": "/assets/icons/favicon-16x16.png",
      "sizes": "16x16",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/favicon-32x32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/favicon-48x48.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/apple-touch-icon.png",
      "sizes": "180x180",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
};

fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2));
console.log('✅ manifest.json created');

// 2. Update all HTML files to add apple-touch-icon and manifest
const oldFaviconBlock = `  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" sizes="48x48">
  <link rel="icon" type="image/svg+xml" href="/assets/icons/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png">`;

const newFaviconBlock = `  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/svg+xml" href="/assets/icons/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png">
  <link rel="manifest" href="/manifest.json">`;

function getAllHtmlFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!item.startsWith('.') && item !== 'node_modules') {
        getAllHtmlFiles(fullPath, files);
      }
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

const htmlFiles = getAllHtmlFiles('.');
let updated = 0;

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf-8');

  if (content.includes('sizes="48x48"') && content.includes('favicon.ico')) {
    content = content.replace(oldFaviconBlock, newFaviconBlock);

    // Also handle variations with different path prefixes
    content = content.replace(
      /(<link rel="icon" href="[^"]*favicon\.ico" sizes=")48x48(")/g,
      '$1any$2'
    );

    // Add apple-touch-icon if not exists
    if (!content.includes('apple-touch-icon')) {
      content = content.replace(
        /(<link rel="icon" type="image\/png" sizes="16x16"[^>]*>)/g,
        '$1\n  <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png">\n  <link rel="manifest" href="/manifest.json">'
      );
    }

    fs.writeFileSync(file, content);
    updated++;
  }
}

console.log(`✅ Updated ${updated} HTML files`);

// 3. Create placeholder for apple-touch-icon (need to create actual PNG)
console.log('\n⚠️  NOTE: You need to create these icon files:');
console.log('   - /assets/icons/apple-touch-icon.png (180x180)');
console.log('   - /assets/icons/icon-192.png (192x192)');
console.log('   - /assets/icons/icon-512.png (512x512)');
console.log('\n   Use this command if you have ImageMagick:');
console.log('   convert favicon.ico -resize 180x180 assets/icons/apple-touch-icon.png');
console.log('   convert favicon.ico -resize 192x192 assets/icons/icon-192.png');
console.log('   convert favicon.ico -resize 512x512 assets/icons/icon-512.png');
