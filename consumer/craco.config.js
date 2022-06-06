const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const deps = require('./package.json').dependencies;

module.exports = {
  overrideWebpackConfig: ({ webpackConfig }) => {
    webpackConfig.output.publicPath = 'auto';
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins = [
        ...webpackConfig.plugins,

        new ModuleFederationPlugin({
          name: 'consumer',
          filename: 'remoteEntry.js',
          remotes: {
            provider: 'provider@http://localhost:3006/remoteEntry.js'
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps['react']
            },
            'react-dom': {
              singleton: true,
              requiredVersion: deps['react-dom']
            }
          }
        }),
        new HtmlWebpackPlugin({
          template: './public/index.html'
        })
      ];
      return webpackConfig;
    },
    output: {
      publicPath: 'http://localhost:3000/'
    }
  }
};
