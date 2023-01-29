import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import Swal from 'sweetalert2'

import { logout } from '../../redux/actions'

import style from './NavBar.module.css'

const NavBar = () => {
  const user = useSelector((state) => state.loginUser)
  const dispatch = useDispatch()

  const handleLogOut = (e) => {
    dispatch(logout(e))
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Cerrando Sesión...',
      showConfirmButton: false,
      timer: 1500,
    })
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
          {user && (
            <>
              <li>
                <NavLink to="/dashboard">Ver Dash</NavLink>
              </li>
              <li>
                <NavLink to="/createbook">Crear Libro</NavLink>
              </li>
              <li>
                <NavLink to="/usuario">Perfil</NavLink>
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
            <NavLink to="/suscripcion">
              <button className={style.buttonSuscribe}>Suscribirse</button>
            </NavLink>
          </div>
</div>
        {/* 
        <div className={style.buttonLogOutContainer}>
          {loginUserVerification() && (
            <button className={style.buttonLogOut} onClick={handleLogOut}>
              <FontAwesomeIcon className={style.buttonLogOutIcon} icon={faSignOut} /> Cerrar Sesíon
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
          )} */}

          <div>
            {user && (
              <button className={style.buttonLogOut} onClick={handleLogOut}>
                <FontAwesomeIcon className={style.buttonLogOutIcon} icon={faSignOut} /> Cerrar
                Sesíon
              </button>
            )}
          </div>
          <div>
            {!user && (
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
