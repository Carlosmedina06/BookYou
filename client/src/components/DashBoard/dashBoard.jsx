import { NavLink } from 'react-router-dom'

import style from '../DashBoard/Dashboard.module.css'

export const DashBoard = () => {
  return (
    <div>
      <h1>Dashboard Administrador</h1>

      <div className={style.contenedor}>
        <div className={style.Usuario}>
          BookYou
          <div className={style.Solapas}>
            <div> USUARIO </div>
            <button>
              <NavLink to="/home"> Inicio </NavLink>
            </button>
            <button> Registro de Usuarios </button>
            <button> Estadísticas </button>
            <button> Cerrar sesión </button>
          </div>
        </div>
        <div className={style.datos}> Resto de la info</div>
      </div>
    </div>
  )
}

export default DashBoard
