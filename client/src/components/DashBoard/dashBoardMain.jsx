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
import { MoneyHandled } from './MoneyHandled/MoneyHandled'
import PageViews from './PageViews/visitCounter.jsx'
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
              <div className={style.title}>
                <h2 className={style.titleEstadistics}>Estadísticas</h2>
              </div>
              <div className={style.homeHeaderGraphs}>
                <div className={style.comments}>
                    <GraphicCommentsQuantity />
                </div>
                <div className={style.counter}>
                   <PageViews/>
                </div>
                
              </div>
              <div className={style.secondRow}>
                <div className={style.usergraphic}>
                    <GraphicUsersFreeToSubs />
                </div>
                <div className={style.bookgraphic}>
                    <GraphicBooksFreeToSubs />
                  
                </div>
                <div className={style.money}>
                   <MoneyHandled/>
                </div>
                               
              </div>
              
            </div>
          )}
          {select === 'books' && (
            <div className={style.bookContainer}>
              <div className={style.graphBooks}>
                
                <GraphicBooksFreeToSubs />
              </div>
              
              <div className={style.AllBooksUsers}>
                <AllBooksUsers />
              </div>
            </div>
          )}

          {select === 'usuarios' && (
            <div className={style.userGraphContainer}>
              <div className={style.usersCardUser}>
                <GraphicUsersFreeToSubs />
              </div>

              <div className={style.bookEditForm}>
                <AllUsers />
              </div>
            </div>
          )}
          {select === 'comentarios' && (
            <div className={style.userContainer}>
              <div className={style.graphCardUser}>
                <GraphicCommentsQuantity />
              </div>
              <NavLink to="/dashboard/comentarios/commentEdit">
                <button className={style.bookListEdit}>Gestionar Comentarios</button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DashBoardMain
