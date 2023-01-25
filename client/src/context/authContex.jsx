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
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState('')
  const [token, setToken] = useState({})

  useEffect(() => {
    const token = window.localStorage.getItem('token')

    token ? setToken(token) : setToken({})
  }, [])

  useEffect(() => {
    const subcribe = onAuthStateChanged(auth, (currenUuser) => {
      !currenUuser ? setUser('') : setUser(currenUuser)
    })

    return subcribe
  }, [])

  const register = async (email, password, displayName) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)

      response.user.displayName = displayName
      axios.post('http://localhost:3001/signup', response.user).then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data)
      })
    } catch (error) {
      console.log({ error: error.message })
    }
  }

  const login = async (email, password) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await signInWithEmailAndPassword(auth, email, password)

      axios.post('http://localhost:3001/login', response.user).then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data)
      })
    } catch (error) {
      console.log({ error: error.message })
    }
  }

  const logout = async () => {
    await signOut(auth)
  }

  const registerGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()

      const res = await signInWithPopup(auth, provider)

      axios.post('http://localhost:3001/signup', res.user).then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data)
      })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error: error.message })
    }
  }

  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider()

    const res = await signInWithPopup(auth, provider)

    axios.post('http://localhost:3001/login', res.user).then((res) => {
      // eslint-disable-next-line no-console
      console.log(res.data)
    })
  }

  return (
    <authContext.Provider
      value={{
        register,
        login,
        logout,
        loginGoogle,
        registerGoogle,
        user,
        token,
      }}
    >
      {children}
    </authContext.Provider>
  )
}
