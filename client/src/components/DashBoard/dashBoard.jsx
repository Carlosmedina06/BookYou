import React, { useEffect } from 'react'
import Swal from 'sweetalert2'

import style from '../DashBoard/Dashboard.module.css'
import SideBar from '../DashAdmin/sideBar/sideBar'

export const DashBoard = () => {
  useEffect(() => {
    Swal.fire({
      title: 'Pagina en Construccion',
      text: 'Esta pagina esta en construccion, pronto estara disponible, podes mirar un poco de lo que se viene, algunos botones aun no estan implementados',
      icon: 'info',
      confirmButtonText: 'Ok',
    })
  }, [])

  return (
    <div className={style.container}>
      <div>
        <SideBar />
      </div>
    </div>
  )
}

export default DashBoard
