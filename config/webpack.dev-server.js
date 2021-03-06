const path = require('path')
const webpack = require('webpack')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const externals = require('./node-externals') // Required to skip /node_modules/ folder

module.exports = {
  name: 'server',
  mode: 'production',
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: [/babel-plugin-universal-import|react-universal-component/],
    }),
  ],
  entry: ['@babel/plugin-transform-runtime', './src/server/render.js'],
  output: {
    filename: 'dev-server-bundle.js',
    path: path.resolve(__dirname, '../build'),
    libraryTarget: 'commonjs2',
  },
  module: {
    exprContextCritical: false, // Should be removed with next versions of webpack
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]',
            },
          },
        ],
      },
      {
        test: /\.sss/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new ExtractCssChunks(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      __isBrowser__: 'true',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.sss'],
  },
}
