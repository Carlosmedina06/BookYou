/* import { AiOutlineRight } from 'react-icons/ai' */
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
/* import { width } from '@mui/system'
import { useEffect } from 'react'
import Swal from 'sweetalert2' */

import style from '../DashBoard/DashboardMain.module.css'
import SideBar from '../DashAdmin/sideBar/sideBar'

import { GraphicBooksFreeToSubs } from './BookGraph/BookGraph'
import { GraphicUsersFreeToSubs } from './UserGraph/UserGraph'
import { GraphicCommentsQuantity } from './CommentGraph/CommentGraph'
import { AllUsers } from './AllUsers/allUsers'
import { AllBooksUsers } from './AllBooks/allBooks'

export const DashBoardMain = () => {
  const { select } = useParams()

  return (
    <div className={style.flexContainer}>
      <div className={style.dash}>
        <div className={style.SideBar}>
          <SideBar />
        </div>
        <div className={style.mainContent}>
          {select === 'stadistics' && (
            <div className={style.homeHeaderGraphscontainer}>
              <div className={style.ContainerTitle}>
                <h2 className={style.titleEstadistics}>Estadisticas</h2>
              </div>
              <div className={style.homeHeaderGraphs}>
                <div className={style.comments}>
                    <GraphicCommentsQuantity />
                </div>
                <div className={style.usergraphic}>
                    <GraphicUsersFreeToSubs />
                </div>
                <div className={style.bookgraphic}>
                    <GraphicBooksFreeToSubs />
                  
                </div>
                                
              </div>
              
            </div>
          )}
          {select === 'books' && (
            <div className={style.bookContainer}>
              <div className={style.graphBooks}>
                {' '}
                <GraphicBooksFreeToSubs />
              </div>
              <div>
                <AllBooksUsers />
              </div>
            </div>
          )}

          {select === 'usuarios' && (
            <div className={style.userContainer}>
              <div className={style.graphCardUser}>
                <GraphicUsersFreeToSubs />
              </div>

              <div className={style.bookEditForm}>
                <AllUsers />
              </div>
            </div>
          )}
          {select === 'comentarios' && (
            <div className={style.userContainer}>
              <NavLink to="/dashboard/comentarios/commentEdit">
                <button className={style.bookListEdit}>Edit</button>
              </NavLink>
              <div className={style.graphCardUser}>
                <GraphicCommentsQuantity />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DashBoardMain
