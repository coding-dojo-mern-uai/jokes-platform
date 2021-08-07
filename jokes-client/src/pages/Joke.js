import React from 'react'

import { useParams } from 'react-router-dom'

import JokeCard from '../components/JokeCard'
import useQuery from '../hooks/useQuery'

const Joke = () => {
  const { _id } = useParams()
  const [response, isLoading] = useQuery({ path: `/jokes/${_id}` })

  if (isLoading) return <span>Loading...</span>

  return (
    <div>
      <h3>Joke</h3>
      <JokeCard joke={response.joke} />
    </div>
  )
}

export default Joke
