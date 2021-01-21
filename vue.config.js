const webpack = require('webpack')
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
  configureWebpack: {
    output: {
      library: 'TimeAgo',
      libraryExport: 'default',
    },
    plugins: [new webpack.BannerPlugin(banner)],
  },
  css: {
    extract: true,
  },
}
