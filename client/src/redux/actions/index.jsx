import axios from 'axios'
/* ACA ESTA TODA LA CONEXION BACK Y FRONT!! */

/* ----------------GET BOOKS-------------- */
export const getBooks = () => async (dispatch) => {
  try {
    const info = await axios.get('http://localhost:3001/books')

    return dispatch({
      type: 'GET_BOOKS',
      payload: info.data,
    })
  } catch (error) {
    dispatch(error)
  }
}

export const getCategory = () => async (dispatch) => {
  try {
    const info = await axios.get('http://localhost:3001/books')
    let category = info.data.map((i) => i.category)

    return dispatch({
      type: 'GET_GENERO',
      payload: category,
    })
  } catch (error) {
    dispatch(error)
  }
}
/* -------------GET BOOKS BY ID------------- */
/* export const getUserId = (id) => async (dispatch) => {
  try {
    const info = await axios.get('http://localhost:3001/book/' + id)

    dispatch(getBookById(info.data))
  } catch (error) {
    dispatch(userError(error))
  }
} */

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
