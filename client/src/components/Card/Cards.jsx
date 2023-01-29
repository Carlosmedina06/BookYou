/* import  { useState } from 'react' */
import { NavLink } from 'react-router-dom'

import style from './Card.module.css'

export default function Card({ name, id, autor, img, estado, comentarios }) {
  /* const [position, setPosition] = useState(0) */

  /*  function handleClick() {
    setPosition((position + 1) % totalCards)
  } */

  return (
    <div className={style.todo}>
      <div className={style.card}>
        <NavLink to={`/book/${id}`}>
          <img alt="icon" className={style.imagen} src={cover} />

          <div className={style.rectangulo}>
            <div className={style.texto}>
              <h4 style={{ fontSize: '15px' }}> {name}</h4>
              <p style={{ fontSize: '13px' }}>titulo{name}</p>
              <h3 style={{ fontSize: '13px' }}>autor: {autor}</h3>
              <p style={{ fontSize: '13px' }}>Estado: {estado}</p>
              <p style={{ fontSize: '13px' }}>{comentarios} comentarios</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  )
}
