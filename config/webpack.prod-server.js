const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals') // Required to skip /node_modules/ folder

module.exports = {
  name: 'server',
  mode: 'production',
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    server: ['./src/server/render.js']
  },
  output: {
    filename: 'prod-server-bundle.js',
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
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    })
  ]
}