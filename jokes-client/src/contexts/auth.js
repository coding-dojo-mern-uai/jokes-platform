import { createContext, useState } from 'react'
import useMutation from '../hooks/useMutation'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const localAuthToken = localStorage.getItem('authToken')
  const [isLoggedIn, setIsLoggedIn] = useState(!!localAuthToken)
  const [authToken, setAuthToken] = useState(localAuthToken)
  const logoutSession = useMutation({ path: '/auth/logout', method: 'post' })

  const setTokens = (token) => {
    localStorage.setItem('authToken', token)
    setAuthToken(token)
    setIsLoggedIn(true)
  }

  const removeTokens = async () => {
    try {
      await logoutSession({ body: {}, config: { withCredentials: true } })
      localStorage.removeItem('authToken')
      setAuthToken()
      setIsLoggedIn(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login: setTokens, authToken, logout: removeTokens }}>
      {children}
    </AuthContext.Provider>
  )
}

/*
Providers = Setea los props 
<AuthContext.Provider /> => <AuthProvider />

Consumers = Ocupa los props del context
const authContext = useContext(AuthContext)
*/
