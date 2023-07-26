const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    });
    config.plugins.push(
      new VanillaExtractPlugin(),
      new MiniCssExtractPlugin({
        filename: "static/chunks/[chunkhash].css",
        chunkFilename: "static/chunks/[chunkhash].css",
      })
    );
    return config;
  },
};