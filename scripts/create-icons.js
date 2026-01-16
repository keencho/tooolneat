const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createIcons() {
  const iconsDir = path.join(__dirname, '../assets/icons');

  // Find source file
  let sourcePath = path.join(iconsDir, 'favicon-48x48.png');
  if (!fs.existsSync(sourcePath)) {
    sourcePath = path.join(iconsDir, 'favicon-32x32.png');
  }

  console.log(`📁 Source: ${sourcePath}`);

  const sizes = [
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'icon-192.png', size: 192 },
    { name: 'icon-512.png', size: 512 }
  ];

  for (const { name, size } of sizes) {
    const outputPath = path.join(iconsDir, name);

    await sharp(sourcePath)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 37, g: 99, b: 235, alpha: 1 } // #2563eb
      })
      .png()
      .toFile(outputPath);

    console.log(`✅ Created ${name} (${size}x${size})`);
  }

  console.log('\n🎉 All icons created!');
}

createIcons().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
