import axios from 'axios'

const useMutation = ({ path, method }) => {
  const executeMutation = async ({ body, params = '', config }) => {
    const baseUrl = 'http://localhost:8001/api'

    const url = `${baseUrl}${path}/${params}`

    return await axios[method](url, body, config)
    // if (method === 'delete') return await axios.delete(url)
    // if (method === 'post') return await axios.post(url, body)
    // if (method === 'put') return await axios.put(url, body)
  }

  return executeMutation
}

export default useMutation
