import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import style from './Login.module.css'
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
  <div className={style.mainContainer}>
    <div className={style.cardContainer}>
      <form onSubmit={submitLogin}>
        {user && <button onClick={handleLogout}>Cerrar sesion</button>}
        {!user && (
          <div className={style.contentformCard}>
          <div className={style.formTitle}>
           <p>Iniciar sesión</p> 
           </div>
            <div className={style.formInputBox}>
                  <label htmlFor="email">E-mail</label>
                  <input name="email" placeholder="email..." type="email" onChange={handletLogin} />
            </div> 
            <div className={style.formInputBox}>
              <label htmlFor="password">Password</label>
                  <input
                   
                    name="password"
                    placeholder="password..."
                    type="password"
                    onChange={handletLogin}
                  />
               </div>
            <br />
            <button  className={style.buttonSignIn}type="submit">Iniciar sesion<div class="arrow-wrapper">
        <div class="arrow"></div>

    </div></button>{' '}
          </div>
        )}

        <div className={style.SignInGoogleButtons}>
   
            {!user && <button onClick={handleGoogle}>
            <div className={style.googleBtn}>
              <div class={style.googleIconWrapper}>
                <img class={style.googleIcon} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
              </div>
              <p class={style.btnText}><b>Entrar con google</b></p>
        </div>
             
            </button>}
          
            <div>
            <Link to="/signup">
            <button  className={style.buttonRegistrer} >Registrarse</button>
            </Link>
            </div>
            
          
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      
      
    </div>
    
  </div>  
  )
}

export default Login
