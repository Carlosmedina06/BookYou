import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useAuth } from '../../context/authContex'
import { loginGoogle, logout, loginLocal } from '../../redux/actions/index'

const Login = () => {
  const dispatch = useDispatch()
  const [token, setToken] = useState({})
  const auth = useAuth()

  useEffect(() => {
    setToken(auth.token)
  }, [auth.token])

  console.log(token)

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
    setToken(auth.token)
  }

  const handleGoogle = (e) => {
    e.preventDefault()
    dispatch(loginGoogle())
  }

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
    setToken({})
  }

  return (
    <div>
      <form onSubmit={submitLogin}>
        <label>Login: </label>
        {token.length > 0 ? (
          <button onClick={handleLogout}>Cerrar sesion</button>
        ) : (
          <>
            <input name="email" placeholder="email..." type="email" onChange={handletLogin} />
            <input
              name="password"
              placeholder="password..."
              type="password"
              onChange={handletLogin}
            />
            <button type="submit">Iniciar sesion</button>
            <br />
            <br />
            <button onClick={handleGoogle}>Inicia sesion con Google</button>
          </>
        )}
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/signup">Registrarse</Link>
      <button onClick={handleLogout}>Cerrar sesion</button>
    </div>
  )
}

export default Login
