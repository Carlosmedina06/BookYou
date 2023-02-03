import rutaApi from '../../API/api'

import { getAllUsers, getUserById, userError } from './userSlice'

export const getUsers = () => async (dispatch) => {
  try {
    const info = await rutaApi.get(`/users`)

    dispatch(getAllUsers(info.data))
  } catch (error) {
    dispatch(userError(error))
  }
}
export const getUserId = (id) => async (dispatch) => {
  try {
    const info = await rutaApi.get(`/users/${id}`)

    dispatch(getUserById(info.data))
  } catch (error) {
    dispatch(userError(error))
  }
}
