import React from 'react'
import { TiDeleteOutline } from 'react-icons/ti'
import { AiOutlineRight } from 'react-icons/ai'

import style from './userAccountRow.module.css'

const UserAccountRow = ({ name, value, onClick, label, data, sign }) => {
  return (
    <button className={style.detailAccountItem} name={name} value={value} onClick={onClick}>
      <div className={style.detailAccountItemName}>
        <h2>{label}</h2>
      </div>
      <div className={style.detailAccountItemData}>{data}</div>
      <div className={style.detailAccountItemSign}>
        {sign === 'arc' && <AiOutlineRight />}
        {sign === 'delete' && <TiDeleteOutline />}
      </div>
    </button>
  )
}

export default UserAccountRow
