import React from "react";
import NavBar from "../NavBar/NavBar";



const Bookdetail = () =>{
return(
   <div className="grid grid-cols-12">
    <div className=" grid col-span-3">
    <NavBar/>
    </div>
    <div className="grid bg-gray  col-span-9 pt-10">
      
           <img className="object-cover h-auto max-w-xs" src="https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg"  alt="" />  
       
        <div>
                <h1>Habitos de Personas Altamente Efectivas de Felipe Rojas</h1>
                <p>«Los 7 hábitos de la gente altamente efectiva» de Stephen Covey es un libro que habla sobre la importancia de cambiar la percepción que tenemos sobre las situaciones en las que nos encontramos para hacernos responsables de nuestros actos (y de las consecuencias de los mismos), mediante nuevos hábitos.</p>
        </div>
        <div>
        <h3></h3>


        </div>
    <div className="box-border h-32 w-32 p-4 border-4">
<h1></h1>

    </div>
    </div>
    </div>
)

}

export default Bookdetail