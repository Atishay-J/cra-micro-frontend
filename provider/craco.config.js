const overrideWebpackConfig = require('./overide-config');

module.exports = {
  plugins: [
    {
      plugin: overrideWebpackConfig
    }
  ],
  webpack: {
    plugins: {
      remove: ['ModuleScopePlugin']
    }
    // configure: (webpackConfig) => {
    //   webpackConfig.plugins = [
    //     // ...webpackConfig.plugins,

    //     new ModuleFederationPlugin({
    //       name: 'provider',
    //       filename: 'remoteEntry.js',
    //       exposes: {
    //         './RemoteApp': './src/components/Navbar.jsx'
    //       },
    //       shared: {
    //         ...deps,
    //         react: {
    //           singleton: true,
    //           requiredVersion: deps['react']
    //         },
    //         'react-dom': {
    //           singleton: true,
    //           requiredVersion: deps['react-dom']
    //         }
    //       }
    //     })
    //   ];
    //   return webpackConfig;
    // }
  }
};
