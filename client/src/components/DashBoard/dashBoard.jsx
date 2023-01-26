import style from '../DashBoard/Dashboard.module.css'
import SideBar from '../DashAdmin/sideBar/sideBar'
import TopBar from '../DashAdmin/topBar/topBar'

export const DashBoard = () => {
  return (
    <div className={style.container}>
      <TopBar />
      <div>
        <SideBar />
        <div> RESTO DE LA INFO </div>
      </div>
    </div>
  )
}

export default DashBoard
