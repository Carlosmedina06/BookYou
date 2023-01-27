import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from "./Signup.module.css"
import { registerLocal, loginGoogle } from '../../redux/actions/index.js'

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
    <div className={style.mainContainer}>
    <div className={style.cardContainer}>
      <form onSubmit={submitRegister}>
      <div className={style.contentformCard}>
      <div className={style.formTitle}>
           <p>Crear Cuenta</p> 
           </div>
           <div className={style.formInputBox}>
                  <label htmlFor="email">Nombre</label>
                  <input name="displayName" placeholder="name" type="text" onChange={handleRegister} />
            </div> 
           <div className={style.formInputBox}>
                  <label htmlFor="email">E-mail</label>
                  <input name="email" placeholder="email..." type="email" onChange={handleRegister} />
            </div> 
            <div className={style.formInputBox}>
                  <label htmlFor="email">Contraseña</label>
                  <input name="confirmpassword" placeholder="password..."  type="password" onChange={handleRegister}/>
            </div> 
            <div className={style.formInputBox}>
                  <label htmlFor="email"> Confirmar Contraseña</label>
                  <input name="confirmpassword" placeholder="confirm password..."  type="password"  onChange={handleRegister}/>
                  <p>{validarPass(register.password, register.confirmpassword)}</p>
            </div> 
        <button  className={style.buttonSignIn} type="submit">Registrarse</button>
        </div>
      </form>
      <div className={style.SignInGoogleButtons}>
      <button onClick={handleGoogle}>
             <div className={style.googleBtn}>
              <div class={style.googleIconWrapper}>
                <img class={style.googleIcon} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
              </div>
              <p class={style.btnText}><b>Registrarse con google</b></p>
            </div>
      </button>
      </div>
      </div>
     
    </div>
  )
}

export default Signup
