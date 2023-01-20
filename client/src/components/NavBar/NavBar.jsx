
import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () =>{
return(
<div className="fixed bg-black h-screen ">
<div className="text-4xl font-extrabold mt-36 mx-5">
  <span className="text-white">
    BOOKYOU
  </span>
</div >

    <nav className="text-white text-xl my-16 mx-10 flex-col place-content-center">
       <ul>
        <li className="my-8"><NavLink to="/home">Inicio</NavLink></li>
        <li className="my-8"><NavLink to="/home">Crear Libro</NavLink></li>
      
        </ul>
       
    </nav>
   <div className="flex justify-center mt-44" >
   <div> <button className="bg-transparent text-white hover:bg-black text-white font-semibold hover:text-white py-2 px-4 border border-white-500  rounded">Suscribirse</button></div>
    </div>
</div>
)}

export default NavBar
