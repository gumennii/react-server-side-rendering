import React from 'react'
import { StaticRouter } from 'react-router'
import { renderToString } from 'react-dom/server'
import { renderRoutes } from 'react-router-config'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'

import App from '../components/App'

export default ({ clientStats }) => (req, res) => {
  const context = {}

  const app = renderToString(
    <StaticRouter location={req.path} context={context}>
      <App />
    </StaticRouter>
  )

  const { js, styles, cssHash } = flushChunks(clientStats, {
    chunkNames: flushChunkNames()
  }) 

  res.send(`
<!doctype html>
<html>
  <head>
    ${styles}
  </head>
  <body>
    <div id="app-root">${app}</div>
    ${cssHash}
    ${js}
  </body>
</html>
  `)
}