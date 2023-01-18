import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
    name: 'books',
    initialState:{
        books:[],
        book:{}
    },
    reducers:{
        getAllBooks:(state, action)=>{
            state.books = action.payload
        },
        getBookById:(state, action)=>{
            state.book = action.payload
        }
    }
})
export const {getAllBooks, getBookById} = booksSlice.actions

export default booksSlice.reducer