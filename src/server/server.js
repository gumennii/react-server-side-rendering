import express from 'express'
import webpack from 'webpack'

import configDevClient from '../../config/webpack.dev-client.js'
import configDevServer from '../../config/webpack.dev-server.js'
import configProdClient from '../../config/webpack.prod-client.js'
import configProdServer from '../../config/webpack.prod-server.js'

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
const expressStaticGzip = require('express-static-gzip')

const server = express()

const DEV = process.env.NODE_ENV === 'development'
const publicPath = configDevClient.output.publicPath
const outputPath = configDevClient.output.path

if (DEV) {
  const compiler = webpack([configDevClient, configDevServer])
  const clientCompiler = compiler.compilers[0]
  const options = { publicPath, stats: { colors: true } }
  
  // Add Dev middleware to express so it uses devServer from webpack
  // Webpack hot Reloading
  server.use(webpackDevMiddleware(compiler, options))
  server.use(webpackHotMiddleware(clientCompiler))
  server.use(webpackHotServerMiddleware(compiler))
  console.log('Middleware enabled')

} else {
  webpack([configProdClient, configProdServer]).run((err, stats) => {
    console.log(
      stats.toString({
        colors: true
      })
    )

    const clientStats = stats.toJson().children[0]
    const render = require('../../build/prod-server-bundle.js').default

    // Letting Express server to serve files from 'dist' folder
    const staticMiddleware = express.static('dist')
    server.use(
      expressStaticGzip('dist', {
        enableBrotli: true
      })
    )

    server.use(render({ clientStats }))
  })
  
}

server.listen(3000, () => {
  console.log('Listening on prot 3000')
})