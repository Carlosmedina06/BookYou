import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import SideBar from '../../DashAdmin/sideBar/sideBar'
import { getUsers } from '../../../redux/actions/index.js'
import api from '../../../utils/axios/axios.js'

import style from './UserEdit.module.css'

export const UserEdit = () => {
  const users = useSelector((state) => state.users)
  const [editedUser, setEditedUser] = useState({
    name: '',
    username: '',
    email: '',
    subscription: '',
    role: '',
    id: '',
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch, editedUser])
  const [input, setInput] = useState({
    search: '',
    select: '',
  })
  const handleSearch = (e) => {
    setInput({
      search: e.target.value,
      select: '',
    })
  }
  const handleUserSelect = (e) => {
    setInput({
      search: '',
      select: e.target.value,
    })

    const user = users.filter((elem) => {
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
    e.preventDefault()

    try {
      const formData = new FormData()

      formData.append('name', editedUser.name)
      formData.append('username', editedUser.username)
      formData.append('email', editedUser.email)
      formData.append('subscription', editedUser.subscription)
      formData.append('role', editedUser.role)
      formData.append('id', editedUser.id)

      const info = await api
        .put('/user/update', editedUser, {
          headers: {
            authorization: `bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          Swal.fire({
            title: res.data,
            icon: 'success',
            timer: 3000,
          })
        })

      setEditedUser({
        name: '',
        username: '',
        email: '',
        subscription: '',
        role: '',
        id: '',
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () => {
    const info = await api
      .put(`/user/delete/${editedUser.id}`, null, {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        Swal.fire({
          title: res.data,
          icon: 'error',
        })
      })

    setEditedUser({
      name: '',
      username: '',
      email: '',
      subscription: '',
      role: '',
      id: '',
    })
    setInput({
      search: '',
      select: '',
    })
    const response = info.data

    navigate('/dashboard/usuarios')

    return response
  }

  return (
    <>
      <SideBar />
      <div className={style.container}>
        <h1>Actualizar Usuarios</h1>
        <br />
        <input name="search" value={input.search} onChange={(e) => handleSearch(e)} />
        <br />
        <select name="users" value={input.select} onChange={(e) => handleUserSelect(e)}>
          <option value="none" />
          {users?.map((element) => {
            return (
              <option key={element.id} value={element.name}>
                {element.name}
              </option>
            )
          })}
        </select>
        <button type="button" onClick={handleClickSearch}>
          Buscar Usuario
        </button>
        <form className={style.form} onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input name="name" value={editedUser.name} onChange={(e) => handleChange(e)} />
          <label>Nombre de Usuario</label>
          <input name="username" value={editedUser.username} onChange={(e) => handleChange(e)} />
          <label>Email</label>
          <input name="email" value={editedUser.email} onChange={(e) => handleChange(e)} />
          <label>Suscripción</label>
          <select
            name="subscription"
            value={editedUser.subscription}
            onChange={(e) => handleChange(e)}
          >
            <option value="none" />
            <option value="free">Free</option>
            <option value="premium">Premium</option>
          </select>
          <label>Rol</label>
          <select name="role" value={editedUser.role} onChange={(e) => handleChange(e)}>
            <option value="none" />
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
          <br />
          <button type="submit">Actualizar</button>
        </form>
        <button type="button" onClick={handleDelete}>
          Eliminar Usuario
        </button>
      </div>
    </>
  )
}
