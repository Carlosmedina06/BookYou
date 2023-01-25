import { useContext, createContext, useState, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth'

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
  const register = async (email, password) => {
    const response = await createUserWithEmailAndPassword(auth, email, password)

    console.log(response)
  }
  const login = async (email, password) => {
    const respose = await signInWithEmailAndPassword(auth, email, password)

    console.log(respose)
  }
  const logout = async () => {
    await signOut(auth)

    console.log('logut')
  }
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider()

    const res = await signInWithPopup(auth, provider)

    console.log(res)
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
