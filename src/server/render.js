import React from 'react'
import { renderToString } from 'react-dom/server'

import App from '../components/App'

export default () => (req, res) => {
  res.send(`
    <html>
      <head>
        <link href="/main.css" type="text/css" />
      </head>
      <body>
        <div id="root">${renderToString(<App />)}</div>
        test@
        <script src="/vendor-bundle.js"></script>
        <script src="/main-bundle.js"></script>
      </body>
    </html>
  `)
}