import React from 'react'

import JokeCard from '../components/JokeCard'
import useQuery from '../hooks/useQuery'
import useMutation from '../hooks/useMutation'

import useAuth from '../hooks/useAuth'

const Jokes = () => {
  const [response, isLoading, refetchQuery] = useQuery({ path: '/jokes' })
  const deleteJoke = useMutation({ path: '/jokes/delete', method: 'delete' })
  // const { isLoggedIn, authToken } = useAuth()

  // console.log(isLoggedIn, authToken)

  const onClickHandler = async (_id) => {
    try {
      await deleteJoke({ params: _id })
      refetchQuery()
    } catch (error) {
      console.log(error)
    }
  }

  if (isLoading) return <span>Loading...</span>

  return (
    <div>
      <h3>All Jokes</h3>
      {response.jokes.map((joke) => (
        <JokeCard key={joke._id} actions joke={joke} onClickButton={() => onClickHandler(joke._id)} />
      ))}
    </div>
  )
}

export default Jokes
