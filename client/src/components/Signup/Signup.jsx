import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { registerLocal, loginGoogle } from '../../redux/actions/index.jsx'

const Signup = () => {
  const [register, setRegister] = useState({
    email: '',
    password: '',
    confirmpassword: '',
    displayName: '',
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const validarPass = (pass, confirmpass) => {
    if (pass === confirmpass) {
      return null
    } else {
      return 'Las contraseñas no coinciden'
    }
  }

  const handleRegister = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    })
  }
  const submitRegister = (e) => {
    e.preventDefault()
    if (register.password === register.confirmpassword) {
      dispatch(registerLocal(register.email, register.password, register.displayName))
      navigate('/login')
    }
  }

  const handleGoogle = async (e) => {
    e.preventDefault()
    await dispatch(loginGoogle())
    navigate('/home')
  }

  return (
    <div>
      <form onSubmit={submitRegister}>
        <label>Register: </label>
        <br />
        <input name="email" placeholder="email..." type="email" onChange={handleRegister} />
        <br />
        <br />
        <input
          name="confirmpassword"
          placeholder="password..."
          type="password"
          onChange={handleRegister}
        />
        <br />
        <input
          name="password"
          placeholder="confirm password.."
          type="password"
          onChange={handleRegister}
        />
        <p>{validarPass(register.password, register.confirmpassword)}</p>
        <br />
        <br />
        <input name="displayName" placeholder="name" type="text" onChange={handleRegister} />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
      <button onClick={handleGoogle}>Login with Google</button>
    </div>
  )
}

export default Signup
