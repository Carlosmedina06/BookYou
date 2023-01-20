import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//import getBookById from "../../../../api/src/routes/controllers/books/getBookById";
import NavBar from "../NavBar/NavBar";



const Bookdetail = () =>{
const dispatch = useDispatch()
const {id} = useParams()
const details = useSelector(state => state.detail)
useEffect(()=>{
    
//dispatch(getBookById(id))

})

return(
   <div className="grid grid-cols-12">
    <div className=" grid col-span-3">
    <NavBar/>
    </div>
    <div className="grid bg-gray col-span-9 pt-10">
      <div className="flex flex-row">
        <div>
            <img className="imgdescription" src="https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg"  alt="" />  
        </div>
            <div>
                <div className="w-6/12 mx-16">
                    <h1 className="font-bold text-2xl">Habitos de Personas Altamente Efectivas de Felipe Rojas</h1>
                </div>
                <div className="w-7/12 mx-16 mt-8">
                    <h2 className="font-medium text-2xl mt-8 mb-2">Acerca del libro</h2>
                    <p>«Los 7 hábitos de la gente altamente efectiva» de Stephen Covey es un libro que habla sobre la importancia de cambiar la percepción que tenemos sobre las situaciones en las que nos encontramos para hacernos responsables de nuestros actos (y de las consecuencias de los mismos), mediante nuevos hábitos.</p>
                </div>
                <div className="my-4 mx-16">
                    <button className="bg-transparent font-semibold text-sm text-black  py-1 px-3 border border-black  rounded-full mx-1">Desarrollo Personal</button>
                    <button className="bg-transparent font-semibold  text-sm text-black  py-1 px-3 border border-black  rounded-full mx-1">Productividad</button>

                </div >
                <div className="my-7 mx-16">
                <button className="bg-black font-bold  text-lg text-white py-2 px-4 border border-black  rounded mx-1">Descargar libro</button>
                </div>
            </div>
        </div>

    <h1>Califica este libro</h1>
    </div>
    </div>
)

}

export default Bookdetail