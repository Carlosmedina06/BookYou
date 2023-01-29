import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { BiLogIn, BiLogOut } from 'react-icons/bi'

// import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { logout } from '../../redux/actions'

import style from './NavBar.module.css'

const NavBar = () => {
  const token = localStorage.getItem('token')

  // la loginUserVerification esta true para facilitar el desarollo
  // const loginUserVerification = true
  const dispatch = useDispatch()
  const handleSuscribe = (e) => {
    e.preventDefault()
    window.open('/pageonconstruction')
  }

  const loginUserVerification = () => {
    if (!token) return false

    return true
  }
  const handleLogOut = (e) => {
    dispatch(logout(e))
  }

  return (
    <div className={style.NavBarContainer}>
      <div className={style.NavBarLogo}>
        <span>BOOKYOU</span>
      </div>

      <nav className={style.NavBarOption}>
        <ul>
          <li>
          <NavLink to="/graphic">Ver Dash</NavLink>
            <NavLink to="/home">Inicio</NavLink>
          </li>
          {loginUserVerification() && (
            <li>
              <NavLink to="/createbook">Crear Libro</NavLink>
            </li>
          )}
          {loginUserVerification() && (
            <li>
              <NavLink to="/usuario">Perfil</NavLink>
            </li>
          )}
        </ul>
      </nav>
      <div />

      <div className={style.buttonSuscribeContainer}>
        <div>
          {' '}
          <div>
            <button className={style.buttonSuscribe} onClick={handleSuscribe}>
              Suscribirse
            </button>
          </div>
          <div>
            {loginUserVerification() && (
              <button className={style.buttonLogOut} onClick={handleLogOut}>
                <FontAwesomeIcon className={style.buttonLogOutIcon} icon={faSignOut} /> Cerrar
                Sesíon
              </button>
            )}
          </div>
          <div>
            {!loginUserVerification() && (
              <Link to="/login">
                <button className={style.buttonLogOut}>
                  <BiLogIn className={style.buttonLogOutIcon} /> Acceder
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
