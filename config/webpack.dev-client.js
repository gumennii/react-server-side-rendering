const path = require('path')
const webpack = require('webpack')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')

module.exports = {
  name: 'client',
  mode: 'development',
  node: { fs: 'empty' }, // Required for @babel7+
  devtool: 'inline-source-map',
  entry: {
    vendor: ['react', 'react-dom'],
    main: [
      '@babel/plugin-transform-runtime',
      'webpack-hot-middleware/client?reload=true',
      './src/index.js'
    ]
  },
  output: {
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    hot: true
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
    exprContextCritical: false, // Should be removed with next versions of webpack
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              emitFile: false
            }
          },
        ]
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
    new ExtractCssChunks({ hot: true }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}