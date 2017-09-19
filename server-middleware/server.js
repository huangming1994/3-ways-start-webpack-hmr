const express = require('express')
const webpack = require('webpack')
const path = require('path')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config.dev.js')

const app = express()
const compiler = webpack(webpackConfig)


app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/asset',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}))

app.use(express.static(path.join(__dirname, '/')))

app.listen(8888)
