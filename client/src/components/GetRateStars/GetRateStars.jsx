import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import style from './GetRateStars.module.css'

const GetRateStars = ({ rate }) => {
  const rows = []

  for (let i = 0; i < rate; i++) {
    rows.push(<FontAwesomeIcon key={i} icon={faStar} />)
  }

  return (
    <div className={style.rateStarRow}>
      <div className={style.rateStar}>{rows}</div>
    </div>
  )
}

export default GetRateStars
