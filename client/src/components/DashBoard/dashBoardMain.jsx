import { AiOutlineRight } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
import { width } from '@mui/system'
import { useEffect } from 'react'
import Swal from 'sweetalert2'

import style from '../DashBoard/DashboardMain.module.css'
import SideBar from '../DashAdmin/sideBar/sideBar'

// import DataTable from '../DashAdmin/userList/userList'
import { GraphicBooksFreeToSubs } from './BookGraph/BookGraph'
import { GraphicUsersFreeToSubs } from './UserGraph/UserGraph'
import { GraphicCommentsQuantity } from './CommentGraph/CommentGraph'
import { BookEdit } from './BookEdit/BookEdit'

export const DashBoardMain = (props) => {
  const { select } = useParams()

  return (
    <div className={style.flexContainer}>
      <div className={style.dash}>
        <div className={style.SideBar}>
          <SideBar />
        </div>
        <div className={style.mainContent}>
          {(select === 'stadistics' || select === 'home') && (
            <div className={style.homeHeaderGraphscontainer}>
              <div className={style.ContainerTitle}>
                <h2>Estadisticas</h2>
              </div>
              <div className={style.homeHeaderGraphs}>
                <div className={style.graphCard}>
                  {/* <img src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1674958273/grafica_3_ghpcmm.png" alt="" /> */}
                  <div className={style.graph}>
                    {' '}
                    <GraphicBooksFreeToSubs />
                  </div>

                  <div className={style.cardTitle}>Libros</div>
                </div>
                <div className={style.graphCard}>
                  {/* <img src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1674958273/grafica_3_ghpcmm.png" alt="" /> */}
                  <div className={style.graph}>
                    <GraphicUsersFreeToSubs />
                  </div>
                  <div className={style.cardTitle}> Usuarios </div>
                </div>
                <div className={style.graphCard}>
                  {/* <img src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1674958273/grafica_3_ghpcmm.png" alt="" /> */}
                  <div className={style.graph}>
                    {' '}
                    <GraphicCommentsQuantity />
                  </div>
                  <div className={style.cardTitle}> Comentarios mensuales</div>
                </div>
              </div>
              {/* <div className={style.arrowText}> <Link to="/dashboard/">Ver todas las estadisticas </Link> <AiOutlineRight/> </div>  */}
            </div>
          )}
          {(select === 'books' || select === 'home') && (
            <div className={style.bookContainer}>
              <div className={style.ContainerTitle}>
                <h2>Libros</h2>
              </div>
              <div className={style.bookEditForm}>
                <BookEdit />{' '}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DashBoardMain
/* <DataTable /> */
