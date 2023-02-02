import axios from 'axios'

import { getAllUsers, getUserById, userError } from './userSlice'

const url = 'http://localhost:3001'

// http://localhost:3001
//https://bookyou-production.up.railway.app

export const getUsers = () => async (dispatch) => {
  try {
    const info = await axios.get(`${url}/users`)

    dispatch(getAllUsers(info.data))
  } catch (error) {
    dispatch(userError(error))
  }
}
export const getUserId = (id) => async (dispatch) => {
  try {
    const info = await axios.get(`${url}/users/${id}`)

    dispatch(getUserById(info.data))
  } catch (error) {
    dispatch(userError(error))
  }
}
