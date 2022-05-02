const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const target = path.resolve(__dirname, 'src/public/images/responsive-source');
const destination = path.resolve(__dirname, 'src/public/images/responsive');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach((image) => {
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-small.jpg`));

    sharp(`${target}/${image}`)
      .resize(1350)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-large.jpg`));
  });
