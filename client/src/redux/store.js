import { configureStore } from '@reduxjs/toolkit'
import users from './userSlice'
import books from './bookSlice'

export default configureStore({
    reducer:{
        users: users,
        books: books
    }
})