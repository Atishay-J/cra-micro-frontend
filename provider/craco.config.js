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
  }
};
