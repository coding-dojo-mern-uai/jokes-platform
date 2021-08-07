import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import JokeForm from '../components/JokeForm'
import useQuery from '../hooks/useQuery'
import useMutation from '../hooks/useMutation'

const UpdateJoke = () => {
  const { _id } = useParams()
  const history = useHistory()

  const [response = {}, isLoading] = useQuery({ path: `/jokes/${_id}` })
  const updateJoke = useMutation({ path: `/jokes/update/${_id}`, method: 'put' })

  const [joke, setJoke] = useState()
  const [formErrors, setFormErrors] = useState()

  useEffect(() => setJoke(response.joke), [response])

  // Recipe
  const onChangeHandler = ({ target: { value, name } }) => {
    const obj = { [name]: value }
    setJoke({ ...joke, ...obj })
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      await updateJoke({ body: joke })
      history.push('/')
    } catch ({ response: { data } }) {
      setFormErrors(data.errors)
    }
  }

  if (isLoading) return <span>Loading</span>

  return (
    <div>
      <h3>Update Joke</h3>
      <JokeForm joke={joke} submitHandler={onSubmitHandler} changeHandler={onChangeHandler} formErrors={formErrors} />
    </div>
  )
}

export default UpdateJoke
