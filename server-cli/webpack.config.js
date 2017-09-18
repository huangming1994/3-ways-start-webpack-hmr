module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + 'asset',
    filename: 'bundle.js',
    publicPath: '/asset',
  }
}