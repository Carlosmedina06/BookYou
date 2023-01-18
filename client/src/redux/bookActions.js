import axios from 'axios'
import { getAllBooks, getBookById } from './bookSlice'

export const getBooks = ()=>async (dispatch)=>{

        try {
            const info = await axios.get('http://localhost:3001/books')
            dispatch(getAllUsers(info.data))
            
        } catch (error) {
            dispatch(userError(error))
        }
        
}

export const getUserId = (id)=> async (dispatch)=>{
        try {
            const info = await axios.get('http://localhost:3001/book/'+id)
            dispatch(getUserById(info.data))
        } catch (error) {
            dispatch(userError(error))
        }
}    
    
