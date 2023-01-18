import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () =>{
return(
<div>
    <div>
        <img src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1674004061/logo_bookyou_e4pt1y.png" alt="BOOKYOU Logo" />
    </div>
    <div>
        <NavLink to="/home">Inicio</NavLink>
        <NavLink to="/home">Mis Libros</NavLink>
        <NavLink to="/home">Perfil</NavLink>
        <NavLink to="/home">Mis publicaciones</NavLink>
        <h1>Tailwind</h1>
        <h2>CSS</h2>
       
    </div>
   
    <button className="btn btn-blue">Boton</button>
</div>
)}

export default NavBar