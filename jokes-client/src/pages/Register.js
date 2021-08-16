import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import useMutation from '../hooks/useMutation'
import useAuth from '../hooks/useAuth'
import { useHistory } from 'react-router-dom'

const Register = () => {
  const [credentials, setNewCredentials] = useState({})
  const [formErrors, setFormErrors] = useState()

  const history = useHistory()
  const registerUser = useMutation({ path: '/auth/register', method: 'post' })
  const { login } = useAuth()

  const changeHandler = ({ target: { value, name } }) => {
    const obj = { [name]: value }
    setNewCredentials({ ...credentials, ...obj })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await registerUser({ body: credentials, config: { withCredentials: true } })
      login(data.authToken)
      history.push('/')
    } catch (error) {
      console.log(error)
      setFormErrors(error.response.data)
    }
  }

  return (
    <div>
      <h3>Sign In</h3>
      <RegisterForm {...{ submitHandler, changeHandler, formErrors, credentials }} />
    </div>
  )
}

export default Register
