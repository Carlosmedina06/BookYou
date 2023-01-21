import React from "react";
import NavBar from "../NavBar/NavBar";



const PageOnConstruction  = () =>{
return(
<div className="grid bg-slate-400 grid-cols-12">
    <div className="col-span-3">
        <NavBar/>
    </div>
    <div className="grid content-center  col-span-5 w-full">
        <div className="inline-block  align-middle">
            <div className=" w-6/12 font-bold text-4xl"><h1>Proximamente</h1></div>
            <div className="text-xl mt-8">
            Aun nos encontramos trabajando en esta 
            caracteristica, estara disponible muy pronto.
            </div>
        </div>
           
    </div>
    <div className="col-span-4 h-screen bg-white">
        <img className="h-screen" src={"https://res.cloudinary.com/dn8jxsqka/image/upload/v1674253571/pagina_en_construccion_ndqp9v.png"} alt="" />
    </div>
</div>
)
}


export default PageOnConstruction