const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [new MiniCssExtractPlugin({ filename: "[name][contenthash].css" })],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ],
    // splitChunks: {
    //   cacheGroups: {
    //     styles: {
    //       name: "styles",
    //       type: "css/mini-extract",
    //       chunks: "all",
    //       enforce: true,
    //     },
    //   },
    // },
  },
});
