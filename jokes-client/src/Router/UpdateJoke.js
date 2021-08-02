import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

const UpdateJoke = () => {
  const [updatedJoke, setJokeUpdatedJoke] = useState()
  const { _id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: {
          joke: { setup, punchline }
        }
      } = await axios.get(`http://localhost:8001/api/jokes/${_id}`)
      setJokeUpdatedJoke({ setup, punchline })
    }
    fetchData()
  }, [_id])

  // Recipe
  const onChangeHandler = ({ target: { value, name } }) => {
    const obj = { [name]: value }
    setJokeUpdatedJoke({ ...updatedJoke, ...obj })
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:8001/api/jokes/update/${_id}`, updatedJoke)
      history.push('/')
    } catch (error) {}
  }

  if (!updatedJoke) return <span>Loading</span>

  return (
    <div>
      <h3>Update Joke</h3>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="setup">Setup</label>
          <input value={updatedJoke.setup} onChange={onChangeHandler} type="text" name="setup" />
        </div>
        <div>
          <label htmlFor="punchline">Punchline</label>
          <input value={updatedJoke.punchline} onChange={onChangeHandler} type="text" name="punchline" />
        </div>
        <input type="submit" value="Update Joke" />
      </form>
    </div>
  )
}

export default UpdateJoke
