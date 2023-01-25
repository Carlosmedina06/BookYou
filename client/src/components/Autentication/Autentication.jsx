import React, { useState } from 'react'

import { useAuth } from '../../context/authContex'

function Autentication() {
  const auth = useAuth()
  const { email } = auth.user
  const [register, setRegister] = useState({
    email: '',
    password: '',
  })
  const [login, setLongin] = useState({
    email: '',
    password: '',
  })
  const hamdleRegister = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    })
  }
  const hamdleLogin = (e) => {
    setLongin({
      ...login,
      [e.target.name]: e.target.value,
    })
  }
  const submitRegister = (e) => {
    e.preventDefault()
    auth.register(register.email, register.password)
  }
  const submitLogin = (e) => {
    e.preventDefault()
    auth.login(login.email, login.password)
  }
  const handleGoogle = (e) => {
    e.preventDefault()
    auth.loginGoogle()
  }
  const handleLogut = (e) => {
    e.preventDefault()
    auth.logout()
  }

  return (
    <div>
      <form onSubmit={submitRegister}>
        <label>Register: </label>
        <input name="email" placeholder="email..." type="email" onChange={hamdleRegister} />
        <input
          name="password"
          placeholder="password..."
          type="password"
          onChange={hamdleRegister}
        />
        <button type="submit">Register</button>
      </form>
      <form onSubmit={submitLogin}>
        <label>LogIn: </label>
        <input name="email" placeholder="email..." type="email" onChange={hamdleLogin} />
        <input name="password" placeholder="password..." type="password" onChange={hamdleLogin} />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleGoogle}>Login whit Google</button>
      {email ? <h1>Usuario {email} esta logeado</h1> : <h1>No hay usuarios logeados</h1>}
      <button onClick={handleLogut}>Logout</button>
    </div>
  )
}

export default Autentication
