const webpack = require('webpack')
const openBrowserWebpackPlugin = require('open-browser-webpack-plugin')

module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr',
    './index.js',
  ],
  output: {
    path: __dirname + 'asset',
    filename: 'bundle.js',
    publicPath: '/asset',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new openBrowserWebpackPlugin({ url: 'http://localhost:8888' }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}