const path = require('path')
const webpack = require('webpack')

module.exports = {
  name: 'client',
  mode: 'development',
  node: { fs: 'empty' }, // Required for @babel7+
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
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { 
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    })
  ]
}