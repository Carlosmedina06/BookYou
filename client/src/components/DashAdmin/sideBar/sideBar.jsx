import TimelineIcon from '@mui/icons-material/Timeline'
import PersonIcon from '@mui/icons-material/Person'
import ForumIcon from '@mui/icons-material/Forum'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import { logout } from '../../../redux/actions'
import style from '../sideBar/sideBar.module.css'

const SideBar = () => {
  const user = useSelector((state) => state.loginUser)

  const navigate = useNavigate()
  const dispatch = useDispatch()

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
    <div className={style.sidebar}>
      <div className={style.sidebarWrapper}>
        <div className={style.sidebarMenu}>
          <div className={style.titulo}>
            <Link to="/home">
              <span>BOOKYOU</span>
            </Link>
          </div>
          <h3 className={style.sidebarTitle}>Panel de Admin.</h3>

          <ul className={style.sidebarList}>
            <li className={style.sidebarListItem}>
              <TimelineIcon className={style.sidebarIcon} />
              <NavLink className={style.letras} to="/dashboard/stadistics">
                Estadísticas
              </NavLink>
            </li>
            <li className={style.sidebarListItem}>
              <PersonIcon className={style.sidebarIcon} />
              <NavLink className={style.letras} to="/dashboard/usuarios">
                Usuarios
              </NavLink>
            </li>
            <li className={style.sidebarListItem}>
              <AutoStoriesIcon className={style.sidebarIcon} />
              <NavLink className={style.letras} to="/dashboard/books">
                Libros
              </NavLink>
            </li>
            <li className={style.sidebarListItem}>
              <ForumIcon className={style.sidebarIcon} />
              <NavLink className={style.letras} to="/dashboard/comentarios">
                Comentarios
              </NavLink>
            </li>
          </ul>
        </div>
        {/*  <button className={style.buttonLogOut}>
          <FontAwesomeIcon className={style.buttonLogOutIcon} icon={faSignOut} /> Cerrar Sesíon
        </button> */}
        <div>
          {user && (
            <button className={style.buttonLogOut} onClick={handleLogOut}>
              <FontAwesomeIcon className={style.buttonLogOutIcon} icon={faSignOut} /> Cerrar Sesíon
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SideBar
