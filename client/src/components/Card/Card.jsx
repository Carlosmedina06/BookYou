import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import GetRateStars from '../GetRateStars/GetRateStars.jsx'

import style from './Card.module.css'

export default function Card({ name, id, autor, img, estado, comentarios, calificacion }) {
  return (
    <div className={style.todo}>
      <div className={style.card}>
        <NavLink to={`/bookdetail/${id}`}>
          <div className={estado === 'premium' ? style.premiumRibbon : style.freeRibbon}>
            <img alt="icon" className={style.imagen} src={img} />
          </div>
          <div>
            <div className={style.texto}>
              <div>
                <GetRateStars rate={5} />
              </div>
              <p className={style.bookTitle}>{name}</p>
              <p>{autor}</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  )
}
