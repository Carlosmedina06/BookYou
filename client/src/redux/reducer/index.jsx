const initialState = {
  books: [],
  allBooks: [], //copia del estado de todos los perros
  detail: [],
  category: [],
  //se puede guardar filtro.
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        ...state,
        books: action.payload,
        allBooks: action.payload,
      }
    case 'GET_GENERO':
      return {
        ...state,
        category: action.payload,
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
