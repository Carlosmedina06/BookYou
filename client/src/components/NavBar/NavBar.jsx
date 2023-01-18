import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () =>{
return(
<div className="fixed bg-black h-screen ">
<div className="text-4xl font-extrabold my-14 mx-5">
  <span className="text-white">
    BOOKYOU
  </span>
</div>

    <div className="text-white text-xl my-20 mx-10 flex-col place-content-center">
        <div className="my-3"><NavLink to="/home">Inicio</NavLink></div>
        <div  className="my-3"><NavLink to="/home">Mis Libros</NavLink></div>
        <div  className="my-3"><NavLink to="/home">Perfil</NavLink></div>
        <div  className="my-3"><NavLink to="/home">Mis publicaciones</NavLink></div>
        
       
    </div>
   <div className="flex justify-center mt-36" >
   <div> <button className="bg-transparent text-white hover:bg-black text-white font-semibold hover:text-white py-2 px-4 border border-white-500  rounded">Dark/ligth mode</button></div>
    </div>
</div>
)}

export default NavBar