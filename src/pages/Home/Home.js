import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import styles from './styles.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Home Page Title</title>
          <meta name='description' content='Some Application Description' />
        </Helmet>
        <div className={styles.home}>
          Home Page
        </div>
      </div>
    )
  }
}

export default Home