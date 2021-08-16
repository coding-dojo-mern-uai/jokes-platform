import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import useMutation from '../hooks/useMutation'
import useAuth from '../hooks/useAuth'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const [credentials, setNewCredentials] = useState({})
  const [formErrors, setFormErrors] = useState()

  const history = useHistory()
  const loginUser = useMutation({ path: '/auth/login', method: 'post' })
  const { login } = useAuth()

  const onChangeHandler = ({ target: { value, name } }) => {
    const obj = { [name]: value }
    setNewCredentials({ ...credentials, ...obj })
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await loginUser({ body: credentials, config: { withCredentials: true } })
      login(data.authToken)
      history.push('/')
    } catch (error) {
      console.log(error)
      setFormErrors(error.response.data)
    }
  }

  return (
    <div>
      <h3>Sign Up</h3>
      <LoginForm changeHandler={onChangeHandler} submitHandler={onSubmitHandler} formErrors={formErrors} />
    </div>
  )
}

export default Login
