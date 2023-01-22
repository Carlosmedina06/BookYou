
import React from "react";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
  const handleSuscribe = (e) => {
    e.preventDefault()
    window.open("/pageonconstruction")

  }
  return (
    <div >
      <div >
        <span >
          BOOKYOU
        </span>
      </div >

      <nav >
        <ul>
          <li><NavLink to="/home">Inicio</NavLink></li>
          <li ><NavLink to="/home">Crear Libro</NavLink></li>

        </ul>

      </nav>
      <div >
        <div> <button onClick={handleSuscribe} >Suscribirse</button></div>
      </div>
    </div>
  )
}

export default NavBar
