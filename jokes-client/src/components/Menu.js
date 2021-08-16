import React from 'react'
import Button from '@material-ui/core/Button'

const Menu = ({ onClick }) => {
  return (
    <div style={{ marginLeft: 15 }}>
      <Button variant="contained" color="default" onClick={onClick}>
        Logout
      </Button>
    </div>
  )
}

export default Menu
