import axios from 'axios'
/* ACA ESTA TODA LA CONEXION BACK Y FRONT!! */
export const GET_USERS = 'GET_USERS'
export const ERROR = 'ERROR'
export const GET_BOOKBY_ID = "GET_BOOKBY_ID"
/* ----------------GET BOOKS-------------- */
export const getBooks = () => async (dispatch) => {
  try {
    const info = await axios.get('http://localhost:3001/book')

    return dispatch({
      type: 'GET_BOOKS',
      payload: info.data,
    })
  } catch (error) {
    dispatch(error)
  }
}

export const getCategorys = () => async (dispatch) => {
  try {
    const info = await axios.get('http://localhost:3001/category')

    return dispatch({
      type: 'GET_ALL_GENEROS',
      payload: info.data,
    })
  } catch (error) {
    dispatch(error)
  }
}

export const filterCategorys = (payload) => {
  return {
    type: 'FILTER_CATEGORY',
    payload,
  }
}

export const orderAlf = (payload) => {
  return {
    type: 'ORDER_ALF',
    payload,
  }
}

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
/* -------------GET BOOKS BY ID------------- */
//  export const getUserId = (id) => async (dispatch) => {
//   try {
//     const info = await axios.get('http://localhost:3001/book/' + id)

//     dispatch(getBookById(info.data))
//   } catch (error) {
//     dispatch(userError(error))
//   }
// }

export const getBookById = (id) => async (dispatch) => {
  try {
    const info = await axios.get('http://localhost:3001/book/' + id)

    dispatch({type: GET_BOOKBY_ID, payload: info.data})
  } catch (error) {
    dispatch(userError(error))
  }
} 

/* export const getUsers = () => async (dispatch) => {
  try {
    const info = await axios.get('http://localhost:3001/users')

    dispatch(getAllUsers(info.data))
  } catch (error) {
    dispatch(userError(error))
  }
}
export const getUserId = (id) => async (dispatch) => {
  try {
    const info = await axios.get('http://localhost:3001/user/' + id)

    dispatch(getUserById(info.data))
  } catch (error) {
    dispatch(userError(error))
  }
} */
