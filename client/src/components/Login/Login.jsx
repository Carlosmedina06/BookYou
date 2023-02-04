import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { useEffect } from 'react'

import { loginGoogle, loginLocal, loginUser } from '../../redux/actions/index'

import style from './Login.module.css'

const Login = () => {
  const dispatch = useDispatch()
  const navigation = useNavigate()

  useEffect(() => {
    dispatch(loginUser())
  }, [dispatch])

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
  const submitLogin = async (e) => {
    e.preventDefault()
    try {
      await dispatch(loginLocal(login.email, login.password))
      await Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Ingresando...',
        showConfirmButton: false,
        timer: 1500,
      })
      navigation('/home')
    } catch (error) {
      await Swal.fire({
        position: 'center',
        title: 'Error de inicio de session ',
        text: 'Asegúrese que su email y contraseña sean los correctos ',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    }
  }

  const handleGoogle = async (e) => {
    e.preventDefault()
    await dispatch(loginGoogle())
    await Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ingresando...',
      showConfirmButton: false,
      timer: 1500,
    })
    navigation('/home')
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.cardContainer}>
        <form onSubmit={submitLogin}>
          {!user && (
            <div className={style.contentformCard}>
              <div className={style.formTitle}>
                <p>Iniciar sesión</p>
              </div>
              <div className={style.formInputBox}>
                <label htmlFor="email">Correo electronico</label>
                <input name="email" placeholder="email..." type="email" onChange={handletLogin} />
              </div>
              <div className={style.formInputBox}>
                <label htmlFor="password">Contraseña</label>
                <input
                  name="password"
                  placeholder="Contraseña"
                  type="password"
                  onChange={handletLogin}
                />
              </div>
              <br />
              <button className={style.buttonSignIn} type="submit">
                Iniciar sesion
                <div className="arrow-wrapper">
                  <div className="arrow" />
                </div>
              </button>
            </div>
          )}
          <div className={style.SignInGoogleButtons}>
            {!user && (
              <>
                <button onClick={handleGoogle}>
                  <div className={style.googleBtn}>
                    <div className={style.googleIconWrapper}>
                      <img
                        className={style.googleIcon}
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      />
                    </div>
                    <p className={style.btnText}>
                      <b>Entrar con google</b>
                    </p>
                  </div>
                </button>
                <div>
                  <Link to="/signup">
                    <button className={style.buttonRegistrer}>Registrarse</button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
