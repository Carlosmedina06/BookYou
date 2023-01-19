import axios from 'axios'
import { getAllUsers, getUserById, userError } from './userSlice'

export const getUsers = ()=> async (dispatch)=>{
    try {
        const info = await axios.get('http://localhost:3001/users')
        dispatch(getAllUsers(info.data))
        
    } catch (error) {
        dispatch(userError(error))
    }
    
}
export const getUserId = (id)=> async (dispatch)=>{
    try {
        const info = await axios.get('http://localhost:3001/user/'+id)
        dispatch(getUserById(info.data))
    } catch (error) {
        dispatch(userError(error))
    }
}