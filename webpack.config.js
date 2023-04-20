import * as url from "url";
import path from "path";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export default {
  mode: "production",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
};
