import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
    name: 'books',
    initialState:{
        BOOKS:[],
        books:[],
        book:{},
        error:{}
    },
    reducers:{
        getAllBooks:(state, action)=>{
            state.books = action.payload
            state.BOOKS = action.payload
        },
        getBookById:(state, action)=>{
            state.book = action.payload
        },
        bookError:(state, action)=>{
            state.error = action.payload
        }
    }
})
export const {getAllBooks, getBookById} = booksSlice.actions

export default booksSlice.reducer