import React from 'react'

import style from './Pagination.module.css'

export default function Pagination({ prevPage, nextPage, totalPages }) {
  return (
    <div className={style.todo}>
      <button className={style.BtnPag} onClick={prevPage}>
        ⟵ prev page
      </button>
      <p className={style.p}>{totalPages}</p>
      <button className={style.BtnPag} onClick={nextPage}>
        next page →
      </button>
    </div>
  )
}
