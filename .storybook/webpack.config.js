const { resolve } = require('path');

// Export a function. Accept the base config as only param
module.exports = async ({ config, mode }) => {
  // Alter the webpack config
  config.module.rules.push({
    test: /\.css$/i,
    use: ['raw-loader', 'postcss-loader']
  })

  return config;
}
