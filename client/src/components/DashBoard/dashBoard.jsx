import style from '../DashBoard/Dashboard.module.css'
import SideBar from '../DashAdmin/sideBar/sideBar'
import TopBar from '../DashAdmin/topBar/topBar'
import DataTable from '../DashAdmin/userList/userList'

export const DashBoard = () => {
  return (
    <div className={style.container}>
      <TopBar />
      <div>
        <SideBar />
        <div>
          <DataTable />
        </div>
      </div>
    </div>
  )
}

export default DashBoard
