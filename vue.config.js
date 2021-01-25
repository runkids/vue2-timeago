const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const PACKAGE = require('./package.json')

const banner =
  PACKAGE.name +
  ' - ' +
  PACKAGE.version +
  ' | ' +
  '(c) 2018, ' +
  new Date().getFullYear() +
  '  ' +
  PACKAGE.author +
  ' | ' +
  PACKAGE.homepage

module.exports = {
  productionSourceMap: false,
  lintOnSave: true,
  configureWebpack: {
    mode: 'production',
    performance: {
      hints:false
    },
    output: {
      library: 'TimeAgo',
      libraryExport: 'default',
    },
    plugins: [
      new webpack.BannerPlugin(banner),
      new UglifyJsPlugin()
    ]
  },
  css: {
    extract: true,
  }
}
