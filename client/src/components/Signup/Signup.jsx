import React, { useState } from 'react'

import { useAuth } from '../../context/authContex'

const Signup = () => {
  const auth = useAuth()
  const [register, setRegister] = useState({
    email: '',
    password: '',
    displayName: '',
  })
  const handleRegister = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    })
  }
  const submitRegister = (e) => {
    e.preventDefault()
    auth.register(register.email, register.password, register.displayName)
  }

  const handleGoogle = (e) => {
    e.preventDefault()
    auth.registerGoogle()
  }

  return (
    <div>
      <form onSubmit={submitRegister}>
        <label>Register: </label>
        <input name="email" placeholder="email..." type="email" onChange={handleRegister} />
        <input
          name="password"
          placeholder="password..."
          type="password"
          onChange={handleRegister}
        />
        <input name="displayName" placeholder="name" type="text" onChange={handleRegister} />
        <button type="submit">Register</button>
      </form>
      <button onClick={handleGoogle}>Registrer with Google</button>
    </div>
  )
}

export default Signup
