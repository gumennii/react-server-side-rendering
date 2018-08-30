// This is a Global CSS importing
import './assets/global.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import store from './state/store'

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('app-root')
)

console.log('Environemnt is', process.env.NODE_ENV)
