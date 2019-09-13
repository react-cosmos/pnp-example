const PnpWebpackPlugin = require("pnp-webpack-plugin");

module.exports = webpackConfig => {
  webpackConfig.resolve.plugins = [PnpWebpackPlugin];
  webpackConfig.resolveLoader = {
    plugins: [PnpWebpackPlugin.moduleLoader(module)]
  };
  return webpackConfig;
};
