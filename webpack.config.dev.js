const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    // will redirect all server(webpack dev server) requests to /
    publicPath: '/',
  },
  watch: true,
  devServer: {
    port: 9877,
    open: true,
    // will redirect 404's to publicPath
    historyApiFallback: true,
  },
  devtool: 'source-map',
})
