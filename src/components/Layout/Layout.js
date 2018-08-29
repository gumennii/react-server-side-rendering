import React from 'react'
import { Link } from 'react-router-dom'

const Layout = (props) => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/sample'>Sample</Link>
      </nav>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Layout