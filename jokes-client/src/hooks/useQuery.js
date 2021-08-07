import { useEffect, useState } from 'react'
import axios from 'axios'

const useQuery = ({ path }) => {
  const [response, setResponse] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [refetch, setRefetch] = useState()

  const refetchQuery = () => setRefetch(Math.random())

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:8001/api'
      const { data } = await axios.get(`${url}${path}`)
      setResponse(data)
      setIsLoading(false)
    }
    fetchData()
  }, [path, refetch])

  return [response, isLoading, refetchQuery]
}

export default useQuery
