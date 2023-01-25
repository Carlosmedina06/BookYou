import { useContext, createContext, useState, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth'
import axios from 'axios'

import { auth } from '../utils/FireBase/FireBase'

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)

  if (!context) {
    console.log('errror no creaste el contexto')
  }

  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState('')

  useEffect(() => {
    const subcribe = onAuthStateChanged(auth, (currenUuser) => {
      if (!currenUuser) {
        console.log('no hay usuarios logeados')
        setUser('')
      } else {
        setUser(currenUuser)
      }
    })
  }, [])
  const register = async (email, password, displayName) => {
    const response = await createUserWithEmailAndPassword(auth, email, password)

    response.user.displayName = displayName

    axios.post('http://localhost:3001/signup', response.user).then((res) => {
      console.log(res)
    })
  }
  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password)

    console.log(response)
  }
  const logout = async () => {
    await signOut(auth)
  }
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider()

    const res = await signInWithPopup(auth, provider)

    axios.post('http://localhost:3001/signup', res.user).then((res) => {
      console.log('axios', res)
    })
  }

  return (
    <authContext.Provider
      value={{
        register,
        login,
        logout,
        loginGoogle,
        user,
      }}
    >
      {children}
    </authContext.Provider>
  )
}
