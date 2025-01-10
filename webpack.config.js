const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "index.js"),
    app2: path.resolve(__dirname, "index2.js"),
    app3: path.resolve(__dirname, "index3.js"),
    app4: path.resolve(__dirname, "index4.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3001,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
      chunks: ["app"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index2.html"),
      filename: "index2.html",
      chunks: ["app2"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index3.html"),
      filename: "index3.html",
      chunks: ["app3"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index4.html"),
      filename: "index4.html",
      chunks: ["app4"],
    }),
  ],
};
