import { useContext } from 'react'
import { AuthContext } from '../contexts/auth'

const useAuth = () => {
  const authContext = useContext(AuthContext)
  return authContext
}

export default useAuth
