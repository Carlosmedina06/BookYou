
import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar = () =>{
const handleSuscribe = (e) =>{
e.preventDefault()
window.open("/pageonconstruction")

}
return(
<div className = {style.NavBarContainer} >
<div className={style.NavBarLogo}>
  <span>
    BOOKYOU
  </span>
</div >

    <nav className={style.NavBarOption}>
       <ul>
        <li ><NavLink to="/home">Inicio</NavLink></li>
        <li ><NavLink to="/createbook">Crear Libro</NavLink></li>
      
        </ul>
       
    </nav>
   <div className={style.buttonSuscribeContainer}>
   <div> <button onClick={handleSuscribe} onClick={handleSuscribe}className={style.buttonSuscribe}>Suscribirse</button></div>
    </div>
    </div>
  )
  }

export default NavBar

