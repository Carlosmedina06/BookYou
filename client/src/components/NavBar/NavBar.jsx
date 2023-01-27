import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

import { loginUser, logout } from '../../redux/actions'

import style from './NavBar.module.css'

const NavBar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.loginUser)

  console.log('navbar', user)

  const handleSuscribe = (e) => {
    e.preventDefault()
    window.open('/pageonconstruction')
  }

  useEffect(() => {
    dispatch(loginUser())
  }, [dispatch])

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <div className={style.NavBarContainer}>
      <div className={style.NavBarLogo}>
        <span>BOOKYOU</span>
      </div>

      <nav className={style.NavBarOption}>
        <ul>
          <li>
            <NavLink to="/home">Inicio</NavLink>
          </li>
          {user.length > 0 ? (
            <>
              <li>
                <NavLink to="/createbook">Crear Libro</NavLink>
              </li>
              <button className={style.buttonLogOut} onClick={handleLogout}>
                <FontAwesomeIcon className={style.buttonLogOutIcon} icon={faSignOut} /> Cerrar
                Sesíon
              </button>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>{' '}
              </li>
              <li>
                <NavLink to="/signup">registro</NavLink>{' '}
              </li>
            </>
          )}
        </ul>
      </nav>
      <div />
      <div className={style.buttonSuscribeContainer}>
        <div>
          {' '}
          <div>
            <div>
              <button className={style.buttonSuscribe} onClick={handleSuscribe}>
                Suscribirse
              </button>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  )
}

export default NavBar
