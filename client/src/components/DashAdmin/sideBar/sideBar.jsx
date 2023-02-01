import HomeIcon from '@mui/icons-material/Home'
import TimelineIcon from '@mui/icons-material/Timeline'
import PersonIcon from '@mui/icons-material/Person'
import ForumIcon from '@mui/icons-material/Forum'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'

import style from '../sideBar/sideBar.module.css'
/* import DashBoardMain from '../../DashBoard/dashBoardMain' */

const SideBar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebarWrapper}>
        <div className={style.sidebarMenu}>
          <div className={style.titulo}>
            <Link to="/home">
              <span>BOOKYOU</span>
            </Link>
          </div>
          <h3 className={style.sidebarTitle}>Dashboard</h3>

          <ul className={style.sidebarList}>
            <li className={style.sidebarListItem}>
              <HomeIcon className={style.sidebarIcon} />
              <NavLink className={style.letras} to="/dashboard/home">
                Home
              </NavLink>
            </li>
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
        <button className={style.buttonLogOut}>
          <FontAwesomeIcon className={style.buttonLogOutIcon} icon={faSignOut} /> Cerrar Sesíon
        </button>
      </div>
    </div>
  )
}

/* USUARIO INICIO REGISTROUSUARIOS BALANCE */
export default SideBar
