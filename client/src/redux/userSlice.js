import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState:{
        users:[],
        user:{}
    },
    reducers:{
        getAllUsers:(state, action)=>{
            state.users = action.payload
        },
        getUserById:(state, action)=>{
            state.user = action.payload
        }
    }
})
export const {getAllUsers, getUserById} = usersSlice.actions

export default usersSlice.reducer