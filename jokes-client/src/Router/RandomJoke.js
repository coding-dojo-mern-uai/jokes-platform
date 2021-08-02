import React, { useEffect, useState } from 'react'
import axios from 'axios'

const RandomJoke = () => {
  const [randomJoke, setRandomJoke] = useState()

  useEffect(() => {
    const fecthData = async () => {
      const {
        data: { joke }
      } = await axios.get(`http://localhost:8001/api/jokes/random`)
      setRandomJoke(joke)
    }
    fecthData()
  }, [])

  if (!randomJoke) return <span>Loading...</span>

  return (
    <div>
      <h3>Random Joke</h3>
      <div style={{ marginBottom: 50 }}>
        <p>
          <b>Setup:</b> {randomJoke.setup}
        </p>
        <p>
          <b>Punchline:</b> {randomJoke.punchline}
        </p>
      </div>
    </div>
  )
}

export default RandomJoke
