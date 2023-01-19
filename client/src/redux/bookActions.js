import axios from 'axios'
import { getAllBooks, getBookById, userError } from './bookSlice'

export const getBooks = ()=>async (dispatch)=>{

        try {
            const info = await axios.get('http://localhost:3001/books')
            dispatch(getAllBooks(info.data))
            
        } catch (error) {
            dispatch(userError(error))
        }
        
}

export const getUserId = (id)=> async (dispatch)=>{
        try {
            const info = await axios.get('http://localhost:3001/book/'+id)
            dispatch(getBookById(info.data))
        } catch (error) {
            dispatch(userError(error))
        }
}    
    
