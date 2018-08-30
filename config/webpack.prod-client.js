const path = require('path')
const webpack = require('webpack')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  name: 'client',
  mode: 'production',
  entry: {
    vendor: ['react', 'react-dom'],
    main: ['./src/index.js']
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendors: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
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
        use: [ExtractCssChunks.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new ExtractCssChunks(),
    new OptimizeCssAssetsPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    })
  ]
}