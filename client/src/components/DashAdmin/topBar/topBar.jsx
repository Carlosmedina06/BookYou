import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import SettingsIcon from '@mui/icons-material/Settings'

import style from '../topBar/topBar.module.css'

const TopBar = () => {
  return (
    <div className={style.topbar}>
      <div className={style.topbarWrapper}>
        <div className={style.topLeft}>
          <span className={style.logo}> BookYou</span>
        </div>
      </div>
    </div>
  )
}

export default TopBar
