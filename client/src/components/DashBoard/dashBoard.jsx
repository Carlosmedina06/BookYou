import style from '../DashBoard/Dashboard.module.css'
import SideBar from '../DashAdmin/sideBar/sideBar'

export const DashBoard = () => {
  return (
    <div className={style.container}>
      <div>
        <SideBar />
      </div>
    </div>
  )
}

export default DashBoard
