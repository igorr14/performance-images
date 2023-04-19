import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";

export default {
  entry: "./src/index.js",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(jpe?g|webp)$/i,
        type: "asset",
      },
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              jpeg: {
                quality: 80,
              },
              webp: {
                lossless: true,
              },
            },
          },
        },
      }),
    ],
  },
};
