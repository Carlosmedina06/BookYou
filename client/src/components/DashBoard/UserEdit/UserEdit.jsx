import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import style from './UserEdit.module.css'

export const UserEdit = () => {
  const users = useSelector((state) => state.users)

  const [input, setInput] = useState({
    search: '',
    select:''
  })
  const handleSearch = (e) => {
    setInput({
      search: e.target.value,
      select:'' 
    })
  }

  const [editedUser, setEditedUser] = useState({
    name: '',
    username: '',
    email: '',
    subscription: '',
    role: '',
    id: '',
  })
  const handleUserSelect = (e)=>{
    setInput({
      search:'',
      select: e.target.value
    })

    const user = users.filter((elem)=>{
      return elem.name === e.target.value
      //return elem.name.toLowerCase().trim() === e.target.value.toLocaleLowerCase().trim()
    })
        
     setEditedUser({
      name: user[0].name,
      username: user[0].username,
      email: user[0].email,
      subscription: user[0].subscription,
      role: user[0].role,
      id: user[0].id,
    })

  }
  const handleClickSearch = () => {
    const user = users.filter((el) => {
      return el.name === input.search
      //return el.name.toLowerCase().trim() === input.search.toLowerCase().trim()
    })

    setEditedUser({
      name: user[0].name,
      username: user[0].username,
      email: user[0].email,
      subscription: user[0].subscription,
      role: user[0].role,
      id: user[0].id,
    })
  }

  
  
  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const formData = new FormData()

    formData.append('name', editedUser.name)
    formData.append('username', editedUser.username)
    formData.append('email', editedUser.email)
    formData.append('subscription', editedUser.subscription)
    formData.append('role', editedUser.role)
    formData.append('id', editedUser.id)

    const info = await axios.put(
      'https://bookyou-production.up.railway.app/user/update',
      editedUser,
      {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      },
    )

    const res = info.data
  }
  const handleDelete = async (e) => {
    const info = await axios.delete(
      'https://bookyou-production.up.railway.app/user/delete/' + editedUser.id,
      {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      },
    )
    setEditedUser({
      name: '',
    username: '',
    email: '',
    subscription: '',
    role: '',
    id: '',
    })
    setInput({
      search:'',
      select:''
    })
    const response = info.data
    return response
  }

  return (
    <div className={style.container}>
      <h1>Update Users</h1>
      <br />
      <input name="search" value={input.search} onChange={(e) => handleSearch(e)} />
      <select
        name="users"
        value={input.select}
        onChange={(e) => handleUserSelect(e)}
      >
        <option value="none"></option>
        {users?.map((element) => {
          return (
            <option key={element.id} value={element.name}>
              {element.name}
            </option>
          );
        })}
      </select>
      <button type="button" onClick={handleClickSearch}>
        Search User
      </button>
      <form className={style.form}>
        <label>Name</label>
        <input name="name" value={editedUser.name} onChange={(e) => handleChange(e)} />
        <label>Username</label>
        <input name="username" value={editedUser.username} onChange={(e) => handleChange(e)} />
        <label>Email</label>
        <input name="email" value={editedUser.email} onChange={(e) => handleChange(e)} />
        <label>Subscription</label>
        <select
          name="subscription"
          value={editedUser.subscription}
          onChange={(e) => handleChange(e)}
        >
          <option value="none"></option>
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </select>
        <label>Role</label>
        <select name="role" value={editedUser.role} onChange={(e) => handleChange(e)}>
          <option value="none"></option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <br />
        <button type="submit" onSubmit={handleSubmit}>
          Update
        </button>
      </form>
      <button type="button" onClick={handleDelete}>
        Delete User
      </button>
    </div>
  )
}
