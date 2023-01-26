import { useContext, createContext, useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '../utils/FireBase/FireBase'

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState('')
  const [token, setToken] = useState({})

  // useEffect(() => {
  //   const token = window.localStorage.getItem('token')

  //   if (token) {
  //     setToken(token)
  //   } else {
  //     setToken({})
  //   }
  // }, [])

  useEffect(() => {
    const subcribe = onAuthStateChanged(auth, (currenUuser) => {
      !currenUuser ? setUser('') : setUser(currenUuser)
    })

    return subcribe
  }, [])

  return (
    <authContext.Provider
      value={{
        user,
        token,
      }}
    >
      {children}
    </authContext.Provider>
  )
}
