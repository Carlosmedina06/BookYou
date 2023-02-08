import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import jwt_decode from 'jwt-decode'
import Swal from 'sweetalert2'
import { useParams, useNavigate } from 'react-router-dom'

import { loginUser, logout } from '../../redux/actions'

import style from './NavBar.module.css'

const NavBar = () => {
  const user = useSelector((state) => state.loginUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { id } = useParams()

  useEffect(() => {
    dispatch(loginUser())
  }, [dispatch])

  const token = localStorage.getItem('token')
  let decoded = token ? jwt_decode(token) : null

  const handleLogOut = (e) => {
    dispatch(logout(e)).then(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cerrando Sesión...',
        showConfirmButton: false,
        timer: 1500,
      })
      navigate('/home')
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
                <NavLink to="/createbook">Crear Libro</NavLink>
              </li>
              <li>
                <NavLink to={`/usuario/${decoded.id}`}>Perfil</NavLink>
              </li>
              {decoded && decoded.role === 'admin' && (
                <li>
                  <NavLink to="/dashboard/stadistics">Panel Admin</NavLink>
                </li>
              )}
            </>
          )}
        </ul>
      </nav>
      <div />
      <div className={style.buttonSuscribeContainer}>
        <div>
          {' '}
          {decoded ? (
            decoded.subsscription === 'premium' ? (
              <div>
                <button className={style.buttonSuscribe}>Premium</button>
              </div>
            ) : (
              <div>
                <NavLink to="/suscripcion">
                  <button className={style.buttonSuscribe}>Suscribirse</button>
                </NavLink>
              </div>
            )
          ) : (
            <div>
              <NavLink to="/suscripcion">
                <button className={style.buttonSuscribe}>Suscribirse</button>
              </NavLink>
            </div>
          )}
        </div>

        <div>
          {user && (
            <button className={style.buttonLogOut} onClick={handleLogOut}>
              <FontAwesomeIcon className={style.buttonLogOutIcon} icon={faSignOut} /> Cerrar Sesión
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
