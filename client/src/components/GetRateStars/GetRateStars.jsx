import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faStar } from '@fortawesome/free-solid-svg-icons'

import style from './GetRateStars.module.css'
let bookComments = []

const GetRateStars = ({ rate }) => {
    const rows = []

    for (let i = 0; i < rate; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        rows.push(<FontAwesomeIcon key={i} icon={faStar} />)
    }

    return (
        <div className={style.rateStarRow}>
            <div className={style.rateStar}>{rows}</div>
        </div>
    )
}

export default GetRateStars
