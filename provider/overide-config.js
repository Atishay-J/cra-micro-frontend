const webpack = require('webpack');
const paths = require('react-scripts/config/paths');

// Sync federated config from folders
const getModuleFederationConfigPath = (additionalPaths = []) => {
  const path = require('path');
  const fs = require('fs');
  const appDirectory = fs.realpathSync(process.cwd());
  const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

  const moduleFederationConfigFiles = [
    'modulefederation.config.js',
    ...additionalPaths
  ];
  return moduleFederationConfigFiles
    .map(resolveApp)
    .filter(fs.existsSync)
    .shift();
};

module.exports = {
  // Override webpack config, we must override the chunkFilename procedure in order to resolve the correct chunk name
  overrideWebpackConfig: ({ webpackConfig, pluginOptions }) => {
    const moduleFederationConfigPath = getModuleFederationConfigPath();

    if (moduleFederationConfigPath) {
      webpackConfig.output.publicPath = 'auto';

      if (pluginOptions?.useNamedChunkIds) {
        webpackConfig.optimization.chunkIds = 'named';
      }

      const htmlWebpackPlugin = webpackConfig.plugins.find(
        (plugin) => plugin.constructor.name === 'HtmlWebpackPlugin'
      );

      htmlWebpackPlugin.userOptions = {
        ...htmlWebpackPlugin.userOptions,
        publicPath: paths.publicUrlOrPath,
        // haha tricked the shit here
        excludeChunks: [require(moduleFederationConfigPath).name]
      };

      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new webpack.container.ModuleFederationPlugin(
          require(moduleFederationConfigPath)
        )
      ];
    }
    return webpackConfig;
  },

  // Override dev server headers for origin control
  overrideDevServerConfig: ({ devServerConfig }) => {
    devServerConfig.headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*'
    };

    return devServerConfig;
  }
};
