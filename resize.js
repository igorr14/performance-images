import sharp from "sharp";

const NUMBER_OF_IMAGES = 10;

const SIZES = {
  MOBILE: 320,
  TABLET: 768,
  DESKTOP_SMALL: 1024,
  DESKTOP_LARGE: 1920,
};

const sizesKeys = Object.keys(SIZES);

for (let i = 0; i < sizesKeys.length; i++) {
  const currentSize = SIZES[sizesKeys[i]];

  for (let j = 1; j <= NUMBER_OF_IMAGES; j++) {
    sharp(`./images/image${j}.jpeg`)
      .resize(currentSize, currentSize)
      .toFile(`./assets/jpeg/image${j}-${currentSize}.jpeg`, (err) =>
        console.log("ERROR: ", err)
      );
  }
}

// 320, 768, 1024 and 1920 pixels
