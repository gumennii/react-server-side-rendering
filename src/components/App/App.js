import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

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
        Application!!!
        <div>
          <button onClick={this.increment.bind(this)}>Increment</button>
          Counter: {this.state.count}
        </div>
      </div>
    )
  }
}

export default hot(module)(App)