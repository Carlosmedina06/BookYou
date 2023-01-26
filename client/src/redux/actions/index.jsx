import axios from 'axios'
/* ACA ESTA TODA LA CONEXION BACK Y FRONT!! */
export const GET_USERS = 'GET_USERS'
export const ERROR = 'ERROR'
export const GET_BOOKBY_ID = 'GET_BOOKBY_ID'
export const GET_BOOK_ID = 'GET_BOOKBY_ID'
export const GET_SEARCH_BOOK = 'GET_SEARCH_BOOK'

/* ------------- GET BOOKS SEARCH ----------*/
export const getSearchBook = (name) => async (dispatch) => {
  try {
    const info = await axios.get('http://localhost:3001/book')
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

/* ----------------------- GET AUTORES LITERARIOS -------------------- */
export const getAutores = () => async (dispatch) => {
  try {
    const info = await axios.get('http://localhost:3001/book')

    return dispatch({
      type: 'GET_SEARCH_AUTORES',
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

/* -------------- FILTRO POR AUTOR ----------------------- */
/* export const filterAutor = (payload) => {
  return {
    type: 'FILTER_AUTOR',
    payload,
  }
} */

/* ----------------- ORDENAR GÉNEROS POR ORDEN ALFABETICO----------------- */
export const orderAlf = (payload) => {
  return {
    type: 'ORDER_ALF',
    payload,
  }
}

/* ----------------- POSTEAR COMENTARIO DE UN LIBRO----------------- */

export const postBookReview = () => async (dispatch) => {
  try {
    const info = await axios.get('http://localhost:3001/create/book')

    return dispatch({
      type: 'GET_COMENTARIOS',
      payload: info.data,
    })
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    })
  }
}
