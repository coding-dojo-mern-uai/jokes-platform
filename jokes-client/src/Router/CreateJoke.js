import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const CreateJoke = () => {
  const [newJoke, setNewJoke] = useState({})
  const history = useHistory()

  // Recipe
  const onChangeHandler = ({ target: { value, name } }) => {
    const obj = { [name]: value }
    setNewJoke({ ...newJoke, ...obj })
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8001/api/jokes/new', newJoke)
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h3>Create Joke</h3>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="setup">Setup</label>
          <input onChange={onChangeHandler} type="text" name="setup" />
        </div>
        <div>
          <label htmlFor="punchline">Punchline</label>
          <input onChange={onChangeHandler} type="text" name="punchline" />
        </div>
        <input type="submit" value="New Joke" />
      </form>
    </div>
  )
}

export default CreateJoke
