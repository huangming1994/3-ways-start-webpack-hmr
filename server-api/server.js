const webpack = require("webpack")
const webpackDevServer = require("webpack-dev-server")
const webpackConfig = require("./webpack.config.dev.js")

const compiler = webpack(webpackConfig)

const app = new webpackDevServer(compiler, {
  //注意此处publicPath必填
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  stats: { colors: true },
})

app.listen(8888, "localhost", function (err) {
  if (err) {
    console.log(err)
  }
})