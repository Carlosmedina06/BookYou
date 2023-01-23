import React from "react";
import NavBar from "../NavBar/NavBar";
import style from "../PageOnConstruction/PageOnConstruction.module.css"


const PageOnConstruction  = () =>{
return(
<div className={style.mainGridContainer}>
    <div className={style.NavBar}>
      <NavBar/>  
    </div>
    <div className={style.infoBox}>
        <div className={style.textBox}>
            <div><h1>Proximamente</h1></div>
            <p>
            Aun nos encontramos trabajando en esta 
            caracteristica, estara disponible muy pronto.
            </p>
        </div>
           
    </div>
    <div className={style.imageBox}>
        <img className="h-screen" src={"https://res.cloudinary.com/dn8jxsqka/image/upload/v1674253571/pagina_en_construccion_ndqp9v.png"} alt="" /> 
    </div>
</div>
)
}


export default PageOnConstruction