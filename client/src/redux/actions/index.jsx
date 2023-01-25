import axios from 'axios'
/* ACA ESTA TODA LA CONEXION BACK Y FRONT!! */
export const GET_USERS = 'GET_USERS'
export const ERROR = 'ERROR'
export const GET_BOOKBY_ID = 'GET_BOOKBY_ID'
export const GET_BOOK_ID = 'GET_BOOKBY_ID'
export const GET_SEARCH_BOOK = 'GET_SEARCH_BOOK'
export const LOGIN_GOOGLE = 'LOGIN_GOOGLE'
export const LOGIN_LOCAL = 'LOGIN_LOCAL'
export const LOGOUT = 'LOGOUT'
export const LOGIN = 'LOGIN'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth'

import { auth } from '../../utils/FireBase/FireBase'

export const loginGoogle = () => async (dispatch) => {
  const provider = new GoogleAuthProvider()

  const res = await signInWithPopup(auth, provider)

  axios.post('http://localhost:3001/login', res.user).then((res) => {
    return dispatch({
      type: LOGIN_GOOGLE,
      payload: res.data.token,
    })
  })
}

export const loginLocal = (email, password) => async (dispatch) => {
  // eslint-disable-next-line no-unused-vars
  const response = await signInWithEmailAndPassword(auth, email, password)

  axios.post('http://localhost:3001/login', response.user).then((res) => {
    window.localStorage.setItem('token', res.data.token)

    return dispatch({
      type: LOGIN_LOCAL,
      payload: res.data.token,
    })
  })
}

export const logout = () => async (dispatch) => {
  await signOut(auth)
  window.localStorage.removeItem('token')

  return dispatch({
    type: 'LOGOUT',
  })
}

/* ------------- GET BOOKS SEARCH ----------*/
export const getSearchBook = (name) => async (dispatch) => {
  try {
    const info = await axios.get('http://localhost:3001/book')

    console.log(info.data)
    const books = info.data.filter((b) => b.title.toLowerCase().includes(name.toLowerCase()))

    return dispatch({
      type: GET_SEARCH_BOOK,
      payload: books,
    })
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message })
  }
}

/* ----------------GET BOOKS-------------- */
export const getBooks = () => async (dispatch) => {
  try {
    const info = await axios.get('http://localhost:3001/book')

    return dispatch({
      type: 'GET_BOOKS',
      payload: info.data,
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    })
  }
}

/* -------------------- GET USUARIOS ----------------- */
export const getUsers = () => async (dispatch) => {
  try {
    const info = await axios.get('http://localhost:3001/user')

    return dispatch({
      type: GET_USERS,
      payload: info.data,
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    })
  }
}

/* ------------------GET BOOKS POR ID ------------------- */

export const getBookById = (id) => async (dispatch) => {
  try {
    const info = await axios.get('http://localhost:3001/book/' + id)

    dispatch({ type: GET_BOOKBY_ID, payload: info.data })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    })
  }
}

/* ---------------GET GÉNEROS LITERARIOS------------------ */
export const getCategorys = () => async (dispatch) => {
  try {
    const info = await axios.get('http://localhost:3001/category')

    return dispatch({
      type: 'GET_ALL_GENEROS',
      payload: info.data,
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    })
  }
}

/* ------------- FILTRO POR GÉNERO LITERARIO -------------------- */
export const filterCategorys = (payload) => {
  return {
    type: 'FILTER_CATEGORY',
    payload,
  }
}

/* ----------------- ORDENAR GÉNEROS POR ORDEN ALFABETICO----------------- */
export const orderAlf = (payload) => {
  return {
    type: 'ORDER_ALF',
    payload,
  }
}
