import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom"
import { hot } from 'react-hot-loader'

import Routes from "../../routes"

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
      <div>
        <div>
          <button onClick={this.increment.bind(this)}>Increment</button>
          Counter: {this.state.count}
        </div>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    )
  }
}

export default hot(module)(App)