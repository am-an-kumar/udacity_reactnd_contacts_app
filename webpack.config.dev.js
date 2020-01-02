const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");

module.exports = merge(baseConfig, {
  mode: "development",
  watch: true,
  devServer: {
    port: 9877,
    open: true
  },
  devtool: "source-map"
});
