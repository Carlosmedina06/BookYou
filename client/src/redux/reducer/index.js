import {
  ERROR,
  GET_BOOKBY_ID,
  GET_USERS,
  //GET_SEARCH_BOOK,
  LOGIN,
  LOGIN_GOOGLE,
  LOGIN_LOCAL,
  LOGOUT,
  REGISTER_LOCAL,
  CLEAR_BOOK_DETAILS,
GET_USER_BY_ID,
} from '../actions'

const initialState = {
  books: [],
  allBooks: [],
  detail: [],
  category: [],
  autor: [],
  users: [],
  userLogged: [],
  error: [],
  loginUser: '',
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
    case LOGIN_GOOGLE:
      return {
        ...state,
        loginUser: action.payload,
      }

    case LOGIN_LOCAL:
      return {
        ...state,
        loginUser: action.payload,
      }

    case LOGOUT:
      return {
        ...state,
        loginUser: '',
      }

    case LOGIN:
      return {
        ...state,
        loginUser: action.payload,
      }

    case REGISTER_LOCAL: {
      return {
        ...state,
      }
    }
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
      case GET_USER_BY_ID:
        return{
        ...state,
        userLogged: action.payload
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
      case CLEAR_BOOK_DETAILS:
        return{
          ...state,
          detail: '',
        }
    default:
      return state
  }
}

export default rootReducer

/* export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    USERS: [],
    users: [],
    user: {},
    error: {},
  },
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload
      state.USERS = action.payload
    },
    getUserById: (state, action) => {
      state.user = action.payload
    },
    userError: (state, action) => {
      state.error = action.payload
    },
  },
}) */
