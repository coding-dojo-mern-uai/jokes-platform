import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import JokeForm from '../components/JokeForm'
import useMutation from '../hooks/useMutation'

const CreateJoke = () => {
  const [newJoke, setNewJoke] = useState({})
  const [formErrors, setFormErrors] = useState({})

  const history = useHistory()
  const createJoke = useMutation({ path: '/jokes/new', method: 'post' })

  // Recipe
  const onChangeHandler = ({ target: { value, name } }) => {
    const obj = { [name]: value }
    setNewJoke({ ...newJoke, ...obj })
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      await createJoke({ body: newJoke })
      history.push('/')
    } catch ({ response: { data } }) {
      setFormErrors(data.errors)
    }
  }

  return (
    <div>
      <h3>Create Joke</h3>
      <JokeForm submitHandler={onSubmitHandler} changeHandler={onChangeHandler} formErrors={formErrors} />
    </div>
  )
}

export default CreateJoke
