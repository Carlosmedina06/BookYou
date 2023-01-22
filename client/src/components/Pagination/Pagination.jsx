import React from 'react'

import style from './Pagination.module.css'

const Pagination = ({ prevPage, nextPage, totalPages }) => {
  return (
    <div>

      <button onClick={prevPage} className={style.BtnPag}>⟵ prev page</button>
      <p>{totalPages}</p>
      <button onClick={nextPage} className={style.BtnPag}>next page →</button>
    </div>
    
  )
}

export default Pagination