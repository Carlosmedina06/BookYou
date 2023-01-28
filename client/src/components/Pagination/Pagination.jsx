import React from 'react'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';
import style from './Pagination.module.css'

export default function Pagination({ prevPage, nextPage, totalPages }) {
  return (
    <div className={style.todo}>


      <button onClick={prevPage} className={style.BtnPag}><AiOutlineLeft/></button>
      <p className={style.p}>{totalPages}</p>
      <button onClick={nextPage} className={style.BtnPag}><AiOutlineRight/></button>

    </div>
  )
}
