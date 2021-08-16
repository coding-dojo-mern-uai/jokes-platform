import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert'

const LoginForm = ({ submitHandler, changeHandler, credentials = {}, formErrors }) => {
  const linkStyle = {
    color: '#3f51b5',
    textDecoration: 'none',
    fontWeight: 700,
    marginLeft: 15
  }

  return (
    <Paper style={{ padding: 20 }} variant="outlined">
      <form>
        <p style={{ textAlign: 'right' }}>
          Don't have an account{' '}
          <Link to="register" style={linkStyle}>
            Sign Up
          </Link>
        </p>
        {formErrors && <Alert severity="error">{formErrors}</Alert>}
        <div style={{ marginTop: 10 }}>
          <TextField fullWidth label="Email" name="email" variant="outlined" onChange={changeHandler} />
        </div>
        <div style={{ marginTop: 10 }}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            variant="outlined"
            type="password"
            onChange={changeHandler}
          />
        </div>
        <Button style={{ marginTop: 10 }} variant="outlined" color="primary" onClick={submitHandler}>
          Login
        </Button>
      </form>
    </Paper>
  )
}
export default LoginForm
