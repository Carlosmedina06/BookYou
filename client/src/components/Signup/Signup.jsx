import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import { registerLocal, loginGoogle } from '../../redux/actions/index.js'

import style from './Signup.module.css'

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
  const submitRegister = async (e) => {
    e.preventDefault()
    try {
      if (register.password === register.confirmpassword) {
        await dispatch(registerLocal(register.email, register.password, register.displayName))
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario creado',
          showConfirmButton: false,
          timer: 1500,
        })
        navigate('/login')
      }
    } catch (error) {
      await Swal.fire({
        position: 'center',
        title: 'Error de registro ',
        text: 'El email ingreado ya se encuentra en uso',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    }
  }

  const handleGoogle = async (e) => {
    e.preventDefault()
    try {
      await dispatch(loginGoogle())
      await Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario creado con Google',
        showConfirmButton: false,
        timer: 1500,
      })
      navigate('/home')
    } catch (error) {
      await Swal.fire({
        position: 'center',
        title: 'Error de registro ',
        text: 'El email ingreado ya se encuentra en uso',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    }
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.cardContainer}>
        <form onSubmit={submitRegister}>
          <div className={style.contentformCard}>
            <div className={style.formTitle}>
              <p>Crear Cuenta</p>
            </div>
            <div className={style.formInputBox}>
              <label htmlFor="display">Nombre</label>
              <input
                name="displayName"
                placeholder="Nombre"
                type="text"
                onChange={handleRegister}
              />
            </div>
            <div className={style.formInputBox}>
              <label htmlFor="email">Email</label>
              <input name="email" placeholder="Email" type="email" onChange={handleRegister} />
            </div>
            <div className={style.formInputBox}>
              <label htmlFor="password">Contraseña</label>
              <input
                name="password"
                placeholder="Contraseña"
                type="password"
                onChange={handleRegister}
              />
            </div>
            <div className={style.formInputBox}>
              <label htmlFor="confirmpassword"> Confirmar Contraseña</label>
              <input
                name="confirmpassword"
                placeholder="Confirmar contraseña"
                type="password"
                onChange={handleRegister}
              />
              <p>{validarPass(register.password, register.confirmpassword)}</p>
            </div>
            <button className={style.buttonSignIn} type="submit">
              Registrarse
            </button>
          </div>
        </form>
        <div className={style.SignInGoogleButtons}>
          <button onClick={handleGoogle}>
            <div className={style.googleBtn}>
              <div className={style.googleIconWrapper}>
                <img
                  className={style.googleIcon}
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                />
              </div>
              <p className={style.btnText}>
                <b>Registrarse con google</b>
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signup
