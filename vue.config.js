const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      })
    ],
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
    },
  },
  runtimeCompiler: true,
}
