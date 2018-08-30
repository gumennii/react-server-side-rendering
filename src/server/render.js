import React from 'react'
import { StaticRouter } from 'react-router'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import { Provider } from 'react-redux'

import App from '../components/App'
import store from '../state/store'

export default ({ clientStats }) => (req, res) => {
  const context = {}

  const app = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  )

  const { js, styles, cssHash } = flushChunks(clientStats, {
    chunkNames: flushChunkNames()
  })

  const helmet = Helmet.renderStatic()

  res.send(`
<!doctype html>
<html>
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
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