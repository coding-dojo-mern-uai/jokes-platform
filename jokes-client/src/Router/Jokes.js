import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Jokes = () => {
  const [allJokes, setAllJokes] = useState()
  const [deletedId, setDeletedId] = useState()

  // Component did mount
  // Callbacks dentro del useEffect no son asíncronos
  useEffect(() => {
    const fecthData = async () => {
      const {
        data: { jokes }
      } = await axios.get(`http://localhost:8001/api/jokes`)
      setAllJokes(jokes)
    }
    fecthData()
  }, [deletedId])

  const onClickHandler = async (_id) => {
    try {
      await axios.delete(`http://localhost:8001/api/jokes/delete/${_id}`)
      setDeletedId(_id)
    } catch (error) {
      console.log(error)
    }
  }

  const renderJoke = (joke) => {
    return (
      <div key={joke._id} style={{ marginBottom: 50 }}>
        <p>
          <b>Setup:</b> {joke.setup}
        </p>
        <p>
          <b>Punchline:</b> {joke.punchline}
        </p>
        <Link to={`/jokes/${joke._id}`}>See joke</Link>
        <br />
        <Link to={`/jokes/${joke._id}/edit`}>Update joke</Link>
        <br />
        <button onClick={() => onClickHandler(joke._id)}>Delete Joke</button>
      </div>
    )
  }

  if (!allJokes) return <span>Loading...</span>

  return (
    <div>
      <h3>All Jokes</h3>
      {allJokes.map(renderJoke)}
    </div>
  )
}

export default Jokes
