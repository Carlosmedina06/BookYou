import { ERROR, GET_BOOKBY_ID, GET_USERS } from '../actions'
const initialState = {
  books: [],
  allBooks: [],
  detail: [],
  category: [],
  autor: [],
  users: [],
  error: [],
}

function rootReducer(state = initialState, action) {
  let allCateg = state.allBooks
  let categFilter =
    action.payload === 'todos'
      ? allCateg
      : allCateg.filter((c) => c.category?.includes(action.payload))

  let bookSort =
    action.payload === 'asc'
      ? state.books.sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0))
      : state.books.sort((a, b) => (a.title > b.title ? -1 : a.title < b.title ? 1 : 0))

  /*   let allAutores = state.allBooks
  let autorFilter =
    action.payload === 'todos'
      ? allAutores
      : allAutores.filter((c) => c.author?.includes(action.payload)) */

  switch (action.type) {
    case 'GET_BOOKS':
      return {
        ...state,
        books: action.payload,
        allBooks: action.payload,
      }
    case 'GET_SEARCH_BOOK':
      return {
        ...state,
        books: action.payload,
      }
    case 'GET_ALL_GENEROS':
      return {
        ...state,
        category: action.payload,
      }
    case 'GET_SEARCH_AUTORES':
      return {
        ...state,
        autor: action.payload,
      }
    case 'FILTER_CATEGORY':
      return {
        ...state,
        books: categFilter,
      }
    /*  case 'FILTER_AUTOR':
      return {
        ...state,
        autor: autorFilter,
      } */
    case 'ORDER_ALF':
      return {
        ...state,
        books: bookSort,
      }
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case GET_BOOKBY_ID:
      return {
        ...state,
        detail: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
