import React, { Component } from 'react'

// Example of dynamic imports
const getLodash = () => {
  import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
    console.log('lodash was imported')
    console.log('lodash is working', _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }))
  })
}

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
        <div>
          <button onClick={getLodash}>Get Lodash Dynamicaly</button>
        </div>
      </div>
    )
  }
}

export default Sample