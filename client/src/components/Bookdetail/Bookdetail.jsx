import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookById } from "../../redux/actions";

import NavBar from "../NavBar/NavBar";



const Bookdetail = () =>{
const dispatch = useDispatch()
const {id} = useParams()
const details = useSelector(state => state.detail)
useEffect(()=>{
    
dispatch(getBookById(id))

},[dispatch,id])

const handleReadButton = (e) =>{
    e.preventDefault()
    window.open(details.content)
 
 }

return(
   <div className="grid grid-cols-12">
    <div className=" grid col-span-3">
    <NavBar/>
    </div>
    <div className="grid bg-gray col-span-9 pt-10">
      <div className="flex flex-row">
        <div className="w-8/12">
            <img className="w-48" src={details.img}  alt="" />  
        </div>
            <div>
                <div className="w-6/12 mx-16">
                    <h1 className="font-bold text-2xl">{details.title}</h1>
                </div>
                <div className="w-7/12 mx-16 mt-8">
                    <h2 className="font-medium text-2xl mt-8 mb-2">Acerca del libro</h2>
                    <p>{details.description}</p>
                </div>
                <div className="my-4 mx-16">
                    <button className="bg-transparent font-semibold text-sm text-black  py-1 px-3 border border-black  rounded-full mx-1">{details.category}</button>
                   

                </div >
                <div className="my-5 mx-16">
                <button onClick={handleReadButton}className="bg-black font-bold  text-lg text-white py-2 px-4 border border-black  rounded mx-1">Leer libro</button>
                </div>
            </div>
        </div>
    </div>
    </div>
)

}

export default Bookdetail