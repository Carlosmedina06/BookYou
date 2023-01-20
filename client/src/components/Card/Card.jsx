import React, { useState } from "react";
import style from "./Card.module.css";
import { NavLink } from "react-router-dom";


export default function Card ({name,id, autor,img,estado,comentarios  }) {
    const [position, setPosition] = useState(0);

  function handleClick() {
    setPosition((position + 1) % totalCards);
  }
    return <div className={style.todo}>

    <div className={style.card}>
    
        <NavLink to = {`/bookdetail/${id}`}> 
        
        <img src = {img} alt="icon" className= {style.imagen}/>
        
            <div className={style.rectangulo}>

        <div className={style.texto} >
            
            <p style={{ fontSize: "13px" }}>Titulo: {name}</p>
            <h3 style={{ fontSize: "13px" }}>Autor: {autor}</h3>
            <p style={{ fontSize: "13px" }}>Estado: {estado}</p>
            <p style={{ fontSize: "13px" }}>{comentarios} comentarios</p>
        </div>
            </div>
        </NavLink>
    </div>
    </div>
}