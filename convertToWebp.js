import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import imageminJpegtran from "imagemin-jpegtran";

const convertToWebp = async () => {
  await imagemin(["cut-images/*.jpeg"], {
    destination: "public/assets/webp",
    plugins: [imageminWebp()],
  });
};

const compressJpeg = async () => {
  await imagemin(["cut-images/*.jpeg"], {
    destination: "public/assets/jpeg",
    plugins: [imageminJpegtran({ quality: 80 })],
  });
};

convertToWebp();
compressJpeg();
