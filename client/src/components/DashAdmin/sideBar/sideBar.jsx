import HomeIcon from '@mui/icons-material/Home'
import TimelineIcon from '@mui/icons-material/Timeline'
import PersonIcon from '@mui/icons-material/Person'
import BookIcon from '@mui/icons-material/Book'
import ForumIcon from '@mui/icons-material/Forum'
import { NavLink } from 'react-router-dom'

import style from '../sideBar/sideBar.module.css'

const SideBar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebarWrapper}>
        <div className={style.sidebarMenu}>
          <h3 className={style.sidebarTitle}>Dashboard</h3>
          <ul className={style.sidebarList}>
            <li className={style.sidebarListItem}>
              <HomeIcon className={style.sidebarIcon} />
              <NavLink className={style.letras} to="/home">
                Home
              </NavLink>
            </li>
            <li className={style.sidebarListItem}>
              <TimelineIcon className={style.sidebarIcon} />
              <div className={style.letras}>Estadísticas</div>
            </li>
          </ul>
          <h3 className={style.sidebarTitle}>Quik Menu</h3>
          <ul className={style.sidebarList}>
            <li className={style.sidebarListItem}>
              <PersonIcon className={style.sidebarIcon} />
              <div className={style.letras}> Usuarios </div>
            </li>
            <li className={style.sidebarListItem}>
              <BookIcon className={style.sidebarIcon} />
              <div className={style.letras}> Libros Publicados </div>
            </li>
            <li className={style.sidebarListItem}>
              <ForumIcon className={style.sidebarIcon} />
              <div className={style.letras}> Comentarios de usuarios </div>
            </li>
          </ul>
        </div>
        <div className={style.wrapperButton}>
          <button className={style.button}> Cerrar Sesión</button>
        </div>
      </div>
    </div>
  )
}

/* USUARIO INICIO REGISTROUSUARIOS BALANCE */
export default SideBar
