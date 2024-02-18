const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "assets/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: ["/node_modules/", "/server/"],
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: ["/node_modules/", "/server/"],
        type: "asset/resource",
      },
      {
        test: /\.njk$/,
        exclude: ["/node_modules/", "/server/"],
        use: [
          {
            loader: "simple-nunjucks-loader",
            options: {
              searchPaths: ["src/template/nunjucks/"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Makar Sankranti Pongal Lohri",
      filename: "index.html",
      template: "src/template/main.njk",
    }),
    new Dotenv({
      path: "../.env", // Path to .env file (this is the default)
    }),
  ],
};
