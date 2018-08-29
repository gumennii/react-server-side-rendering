import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { renderRoutes } from 'react-router-config';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render() {
    return (
      <div className='app'>
        {renderRoutes(route.routes)}
      </div>
    )
  }
}

export default hot(module)(App)