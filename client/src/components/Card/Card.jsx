import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import style from './Card.module.css'

export default function Card({ name, id, autor, img, estado, comentarios }) {

  return (
    <div className={style.todo}>
      <div className={style.card}>
        <NavLink to={`/bookdetail/${id}`}>
          <img alt="icon" className={style.imagen} src={img} />

          <div className={style.rectangulo}>
            <div className={style.texto}>
              <p style={{ fontSize: '13px' }}>Titulo: {name}</p>
              <p style={{ fontSize: '13px' }}>Estado: {estado}</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  )
}
