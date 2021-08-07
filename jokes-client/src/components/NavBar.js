import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const NavBar = () => {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 700,
    marginLeft: 15
  }

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography style={{ flexGrow: 1 }} variant="h6">
            Jokes App
          </Typography>
          <Link style={linkStyle} to="/">
            Jokes
          </Link>
          <Link style={linkStyle} to="/jokes/new">
            Create Joke
          </Link>
          <Link style={linkStyle} to="/jokes/random">
            Random Joke
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
