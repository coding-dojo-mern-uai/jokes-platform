import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// Recipe
const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  const authenticate = (props) => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />)
  return <Route {...rest} render={authenticate} />
}

export default PrivateRoute
