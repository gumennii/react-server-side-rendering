// This is a Global CSS importing
import './global.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

ReactDOM.hydrate(
  <App />, document.getElementById('root')
)

console.log('Environemnt is', process.env.NODE_ENV)
