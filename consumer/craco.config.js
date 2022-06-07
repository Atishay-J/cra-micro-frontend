const overrideWebpackConfig = require('./overide-config');

module.exports = {
  plugins: [
    {
      plugin: overrideWebpackConfig
    }
  ]
  // webpack: {
  //   // configure: (webpackConfig) => {
  //   //   webpackConfig.plugins = [
  //   //     ...webpackConfig.plugins,
  //   //     new ModuleFederationPlugin({
  //   //       name: 'consumer',
  //   //       filename: 'remoteEntry.js',
  //   //       remotes: {
  //   //         provider: 'provider@http://localhost:3006/remoteEntry.js'
  //   //       },
  //   //       shared: {
  //   //         ...deps,
  //   //         react: {
  //   //           singleton: true,
  //   //           requiredVersion: deps['react']
  //   //         },
  //   //         'react-dom': {
  //   //           singleton: true,
  //   //           requiredVersion: deps['react-dom']
  //   //         }
  //   //       }
  //   //     }),
  //   //     new HtmlWebpackPlugin({
  //   //       template: './public/index.html'
  //   //     })
  //   //   ];
  //   //   return webpackConfig;
  //   // },
  //   // output: {
  //   //   publicPath: 'http://localhost:3000/'
  //   // }
  // }
};
