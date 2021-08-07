import React from 'react'

import JokeCard from '../components/JokeCard'
import useQuery from '../hooks/useQuery'

const RandomJoke = () => {
  const [response, isLoading] = useQuery({ path: '/jokes/random' })

  if (isLoading) return <span>Loading...</span>

  return (
    <div>
      <h3>Random Joke</h3>
      <JokeCard joke={response.joke} />
    </div>
  )
}

export default RandomJoke
