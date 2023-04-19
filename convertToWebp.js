import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

const convertToWebp = async () => {
  await imagemin(["assets/jpeg/*.jpeg"], {
    destination: "assets/webp",
    plugins: [imageminWebp()],
  });
};

convertToWebp();
