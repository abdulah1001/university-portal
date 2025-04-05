const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/images/placeholder-logo.svg');
const pngPath = path.join(__dirname, '../public/images/placeholder-logo.png');

sharp(svgPath)
  .resize(512, 512)
  .png()
  .toFile(pngPath)
  .then(() => console.log('SVG converted to PNG successfully'))
  .catch(err => console.error('Error converting SVG to PNG:', err)); 