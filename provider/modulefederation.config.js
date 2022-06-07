const deps = require('./package.json').dependencies;

module.exports = {
  name: 'provider',
  exposes: {
    './RemoteApp': './src/components/Navbar'
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
