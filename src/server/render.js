import React from 'react'
import { StaticRouter } from 'react-router'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import { Provider } from 'react-redux'
import { matchRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'

import Routes from '../routes'
import App from '../components/App'
import createStore from '../state/store/createStore'

export default ({ clientStats }) => (req, res) => {
  const context = {}

  const helmet = Helmet.renderStatic()

  const store = createStore()
  
  // Get all matched routes and `getInitialData`
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.getInitialData ? route.getInitialData(store) : null
  })

  Promise.all(promises).then(() => {
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
      <script>
        window.__INITIAL_STATE__ = ${serialize(store.getState())}
      </script>
      ${cssHash}
      ${js}
    </body>
  </html>
    `)
  })
}