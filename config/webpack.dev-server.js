const path = require('path')
const webpack = require('webpack')
const externals = require("./node-externals")

module.exports = {
  name: 'server',
  mode: 'production',
  target: 'node',
  externals: externals,
  entry: './src/server/render.js',
  output: {
    filename: 'dev-server-bundle.js',
    path: path.resolve(__dirname, '../build'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.css$/,
        use: "css-loader"
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    })
  ]
}