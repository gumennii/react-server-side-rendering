import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import App from '../components/App'


const server = express()

// Add Dev middleware to express so it uses devServer from webpack
const webpack = require('webpack')
const config = require('../../config/webpack.dev')
const compiler = webpack(config)
const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
)

// Webpack hot Reloading
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)

server.use(webpackHotMiddleware)
server.use(webpackDevMiddleware)

// server.get('*', (req, res) => {
//   const html = renderToString()
// })

// Letting Express server to serve files from 'dist' folder
const staticMiddleware = express.static('dist')
server.use(staticMiddleware)

// server.get('/', (req, res) => {
//   const html = renderToString(<App />)

//   res.send(html)
// })

server.listen(3000, () => {
  console.log('Listening on prot 3000')
})