// This is a Global CSS importing
import './assets/global.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('app-root')
)

console.log('Environemnt is', process.env.NODE_ENV)
