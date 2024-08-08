const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./index.ts",
  },
  output: {
    filename: "[name].pack.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
};
