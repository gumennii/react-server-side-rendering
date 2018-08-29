import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { renderRoutes} from 'react-router-config'

import Routes from '../../routes'
import Layout from '../Layout'

class App extends Component {
  render() {
    return (
      <Layout>
        {renderRoutes(Routes)}
      </Layout>
    )
  }
}

export default hot(module)(App)