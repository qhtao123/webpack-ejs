const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ejs$/i,
        use: ["html-loader", "template-ejs-loader"],
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/views/index.ejs",
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/views/about.ejs",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
  devServer: {
    port: 8080,
    hot: false,
    open: true,
  },
};
