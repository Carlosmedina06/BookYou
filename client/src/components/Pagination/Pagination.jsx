import React from 'react'

import style from './Pagination.module.css'

export default function Pagination  ({ prevPage, nextPage, totalPages })  {
  return (
    <div className={style.todo}>

      <button onClick={prevPage} className={style.BtnPag}>⟵ prev page</button>
      <p className={style.p}>{totalPages}</p>
      <button onClick={nextPage} className={style.BtnPag}>next page →</button>
    </div>
    
  )
}

