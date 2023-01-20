import axios from 'axios';
/* ACA ESTA TODA LA CONEXION BACK Y FRONT!! */
export const GET_USERS = 'GET_USERS';
export const GET_SEARCH_BOOK = 'GET_SEARCH_BOOK';
export const ERROR = 'ERROR';
/* ----------------GET BOOKS-------------- */
export const getBooks = () => async dispatch => {
  try {
    const info = await axios.get('http://localhost:3001/book');

    return dispatch({
      type: 'GET_BOOKS',
      payload: info.data,
    });
  } catch (error) {
    dispatch(error);
  }
};

export const getCategorys = () => async dispatch => {
  try {
    const info = await axios.get('http://localhost:3001/category');

    return dispatch({
      type: 'GET_ALL_GENEROS',
      payload: info.data,
    });
  } catch (error) {
    dispatch(error);
  }
};

export const filterCategorys = payload => {
  return {
    type: 'FILTER_CATEGORY',
    payload,
  };
};

export const orderAlf = payload => {
  return {
    type: 'ORDER_ALF',
    payload,
  };
};

export const getUsers = () => async dispatch => {
  try {
    const info = await axios.get('http://localhost:3001/user');

    return dispatch({
      type: GET_USERS,
      payload: info.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const getSearchBook = name => async dispatch => {
  try {
    const info = await axios.get('http://localhost:3001/book');
    console.log(info.data);
    const books = info.data.filter(b =>
      b.title.toLowerCase().includes(name.toLowerCase())
    );

    return dispatch({
      type: GET_SEARCH_BOOK,
      payload: books,
    });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
};

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
