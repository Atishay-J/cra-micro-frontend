const deps = require('./package.json').dependencies;

module.exports = {
  name: 'consumer',
  // exposes: {
  //   './Button': './src/Button'
  // },
  remotes: {
    provider: 'provider@http://localhost:3006/remoteEntry.js'
  },
  filename: 'remoteEntry.js',
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
};
