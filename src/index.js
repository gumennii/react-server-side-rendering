// This is a Global CSS importing
import './global.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import Routes from './routes'
import App from './components/App'

ReactDOM.hydrate(
  <BrowserRouter>
    {renderRoutes(Routes)}
  </BrowserRouter>, document.getElementById('app-root')
)

console.log('Environemnt is', process.env.NODE_ENV)
