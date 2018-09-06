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
  const helmet = Helmet.renderStatic()

  const store = createStore()
  
  // Get all matched routes and `getInitialData` and prevent failing promise resoliving if one of them fails
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.getInitialData ? route.getInitialData(store) : null
  }).map(promise => {
    if (promise) {
      return new Promise((resolve) => {
        promise
          .then(resolve)
          .catch(resolve)
      })
    }
  })

  Promise.all(promises).then(() => {
    const context = {}

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404)
    }

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