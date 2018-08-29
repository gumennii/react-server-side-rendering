import express from 'express'
import webpack from 'webpack'

import configDevClient from '../../config/webpack.dev-client.js'
import configDevServer from '../../config/webpack.dev-server.js'
import configProdClient from '../../config/webpack.prod-client.js'
import configProdServer from '../../config/webpack.prod-server.js'

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')

const server = express()

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd
const publicPath = configDevClient.output.publicPath

if (isDev) {
  const compiler = webpack([configDevClient, configDevServer])

  const clientCompiler = compiler.compilers[0]
  const serverCompiler = compiler.compilers[1]

  const options = { publicPath, stats: { colors: true } }

  // Add Dev middleware to express so it uses devServer from webpack
  // Webpack hot Reloading
  server.use(webpackDevMiddleware(compiler, options))
  server.use(webpackHotMiddleware(clientCompiler))
  server.use(webpackHotServerMiddleware(compiler))
  console.log('Middleware enabled')

} else {
  webpack([configProdClient, configProdServer]).run((err, stats) => {
    const render = require('../../build/prod-server-bundle.js').default

    // Letting Express server to serve files from 'dist' folder
    const staticMiddleware = express.static('dist')
    server.use(staticMiddleware)

    server.use(render())
  })
  
}

server.listen(3000, () => {
  console.log('Listening on prot 3000')
})