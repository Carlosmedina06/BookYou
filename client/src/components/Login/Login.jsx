import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { loginGoogle, logout, loginLocal } from '../../redux/actions/index'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.loginUser)

  const [login, setLogin] = useState({
    email: '',
    password: '',
  })
  const handletLogin = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    })
  }
  const submitLogin = (e) => {
    e.preventDefault()
    dispatch(loginLocal(login.email, login.password))
    navigate('/')
  }

  const handleGoogle = async (e) => {
    e.preventDefault()
    await dispatch(loginGoogle())
  }

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <div>
      <form onSubmit={submitLogin}>
        {user && <button onClick={handleLogout}>Cerrar sesion</button>}
        <br />
        <br />
        <br />
        <br />

        {!user && (
          <>
            <label>Login: </label>
            <input name="email" placeholder="email..." type="email" onChange={handletLogin} />
            <input
              name="password"
              placeholder="password..."
              type="password"
              onChange={handletLogin}
            />
            <br />
            <button type="submit">Iniciar sesion</button>{' '}
          </>
        )}
        {!user && <button onClick={handleGoogle}>Inicia sesion con Google</button>}
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/signup">Registrarse</Link>
    </div>
  )
}

export default Login
