import React, { Component } from 'react'

class Sample extends Component {
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
        Sample Page
        <div>
          <button onClick={this.increment.bind(this)}>Increment</button>
          {this.state.count}
        </div>
      </div>
    )
  }
}

export default Sample