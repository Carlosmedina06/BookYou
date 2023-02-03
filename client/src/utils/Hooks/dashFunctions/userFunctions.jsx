import { useSelector } from 'react-redux'

import api from '../../axios/axios.js'

export const getUserId = (name) => {
  const users = useSelector((state) => state.users)
  const user = users.filter((el) => {
    el.name.trim().toLowerCase() === name.trim().toLowerCase()
  })
  const userId = user.id

  return userId
}

export const deleteUser = async (id) => {
  const info = await api.delete('/delete/' + id)
  const response = info.data

  return response
}

export const updateUser = (id) => {}
export const quantityOfUsers = () => {
  const users = useSelector((state) => state.users)
  const usersLength = users.length

  return usersLength
}

export const quantityOfSubsUsers = () => {
  const users = useSelector((state) => state.users)
  const usersSubscribed = users.filter((el) => el.subscription === 'premium')
  const howManySubs = usersSubscribed.length

  return howManySubs
}

export const quantityOFFreeUsers = () => {
  const users = useSelector((state) => state.users)
  const usersFree = users.filter((el) => el.subscription === 'free')
  const howManyFree = usersFree.length

  return howManyFree
}
