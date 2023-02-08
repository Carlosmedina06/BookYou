import {
  ERROR,
  GET_BOOKBY_ID,
  GET_USERS,
  /* GET_ONE_USER, */
  //GET_SEARCH_BOOK,
  GET_BOOKS,
  GET_BOOKS_CAROUSEL,
  LOGIN,
  LOGIN_GOOGLE,
  LOGIN_LOCAL,
  LOGOUT,
  REGISTER_LOCAL,
  CLEAR_BOOK_DETAILS,
  GET_USER_BY_ID,
  SET_LOADER,
  GET_PAGE_VIEWS,
  GET_BOOKS_FREE,
  GET_BOOKS_PREMIUM,
} from '../actions'

const initialState = {
  books: [],
  allBooks: [],
  allBooksCarousel: [],
  detail: [],
  category: [],
  autor: [],
  users: [],
  userLogged: [],
  error: [],
  loginUser: '',
  oneUser: [],
  palabrasProhibidas: [],
  comments: [],
  loading: false,
  pageviews: [],
  topBooks: [],
  rate: [],
  booksFree: [],
  booksPremium: [],
}

function rootReducer(state = initialState, action) {
  let allCateg = state.allBooks
  let categFilter =
    action.payload === 'todos'
      ? allCateg
      : allCateg.filter((c) => c.category?.includes(action.payload))

  let bookSort =
    action.payload === 'asc'
      ? state.books.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase()
          ? 1
          : a.title.toLowerCase() < b.title.toLowerCase()
            ? -1
            : 0,
      )
      : state.books.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase()
          ? -1
          : a.title.toLowerCase() < b.title.toLowerCase()
            ? 1
            : 0,
      )

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
    case 'GET_COMENTARIOS': {
      return {
        ...state,
        comments: action.payload,
      }
    }

    case 'GET_COMENTARIOS_RATE': {
      return {
        ...state,
        rate: action.payload,
      }
    }
    case GET_BOOKS_FREE: {
      return {
        ...state,
        booksFree: action.payload,
      }
    }
    case GET_BOOKS_PREMIUM: {
      return {
        ...state,
        booksPremium: action.payload,
      }
    }

    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        allBooks: action.payload,
      }
    case GET_BOOKS_CAROUSEL:
      return {
        ...state,
        allBooksCarousel: action.payload,
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
    case 'GET_PALABRAS_PROHIBIDAS':
      return {
        ...state,
        palabrasProhibidas: action.payload,
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
    /* 
    case GET_USER_BY_ID:
      return {
        ...state,
        userLogged: action.payload,
      } */

    case GET_USER_BY_ID:
      return {
        ...state,
        oneUser: action.payload,
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
        loading: false,
      }

    case CLEAR_BOOK_DETAILS:
      return {
        ...state,
        detail: '',
      }
    case SET_LOADER:
      return {
        ...state,
        loading: action.payload,
      }
    case GET_PAGE_VIEWS:
      return {
        ...state,
        pageviews: action.payload,
      }

    default:
      return { ...state }
  }
}

export default rootReducer
