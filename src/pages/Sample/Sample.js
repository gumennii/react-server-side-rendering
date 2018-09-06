import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import styled, { css } from 'react-emotion'
import styles from './styles.css'
import { fetchInitialData } from '../../state/actions'

// Example of dynamic imports
const getLodash = () => {
  import('lodash').then(_ => {
    console.log('lodash was imported')
    console.log('lodash is working', _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }))
  })
}

const color = 'blue'

// Example of usage emotion css
const emotionClass = css`
  color: ${color};
`

// Example of using react-emotion with props
const Paragraph = styled('p')`
  color: ${props => props.color === 'success' ? 'green' : color}
`

class Sample extends Component {
  state = {
    count: 0
  }

  componentDidMount() {
    if (!this.props.users.isFetched) {
      this.props.fetchInitialData()
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  renderUsers() {
    if (!this.props.users.list) return null

    return this.props.users.list.map(user => (
      <li key={user.name}>{user.name}</li>
    ))
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Sample Page</title>
          <meta name='description' content='Another Title for Sample Page' />
        </Helmet>
        <div className={styles.sample}>
          Sample Page
          <div className={emotionClass}>
            <button onClick={this.increment.bind(this)}>Increment</button>
            {this.state.count}
          </div>
          <div>
            <button onClick={getLodash}>Get Lodash Dynamicaly</button>
          </div>
          <Paragraph color="success">Sample Text</Paragraph>
          <ul>
            {this.renderUsers()}
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  users: state.users
}), { fetchInitialData })(Sample)