const path = require('path')
const webpack = require('webpack')

module.exports = {
  name: 'server',
  mode: 'development',
  target: 'node',
  entry: './src/server/server.js',
  output: {
    filename: 'dev-server-bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      }
    ]
  }
}