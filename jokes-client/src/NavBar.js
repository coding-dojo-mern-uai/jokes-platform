import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Link to="/">Jokes</Link>
      <Link to="/jokes/new">Create Joke</Link>
      <Link to="/jokes/random">Random Joke</Link>
    </div>
  )
}

export default NavBar
