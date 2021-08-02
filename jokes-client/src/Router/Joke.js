import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Joke = () => {
  const [joke, setJoke] = useState()
  const { _id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:8001/api/jokes/${_id}`)
      setJoke(data.joke)
    }
    fetchData()
  }, [_id])

  if (!joke) return <span>Loading...</span>

  return (
    <div>
      <h3>Joke</h3>
      <div style={{ marginBottom: 50 }}>
        <p>
          <b>Setup:</b> {joke.setup}
        </p>
        <p>
          <b>Punchline:</b> {joke.punchline}
        </p>
      </div>
    </div>
  )
}

export default Joke
