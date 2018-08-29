import React from 'react'
import { StaticRouter } from 'react-router'
import { renderToString } from 'react-dom/server'
import { renderRoutes } from 'react-router-config'

import Routes from '../routes'


export default () => (req, res) => {
  const context = {}

  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      {renderRoutes(Routes)}
    </StaticRouter>
  )

  res.send(`
<html>
  <head>
    <link href="main.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <div id="app-root">${content}</div>
    <script src="vendor-bundle.js"></script>
    <script src="main-bundle.js"></script>
  </body>
</html>
  `)
}