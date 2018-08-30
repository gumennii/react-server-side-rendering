const path = require('path')
const webpack = require('webpack')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
const externals = require('./node-externals') // Required to skip /node_modules/ folder

module.exports = {
  name: 'server',
  mode: 'production',
  target: 'node',
  externals: externals,
  entry: './src/server/render.js',
  output: {
    filename: 'prod-server-bundle.js',
    path: path.resolve(__dirname, '../build'),
    libraryTarget: 'commonjs2',
    publicPath: '/'
  },
  module: {
    exprContextCritical: false, // Should be removed with next versions of webpack
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.css$/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractCssChunks(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    })
  ]
}