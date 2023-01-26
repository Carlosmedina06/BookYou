
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookById } from "../../redux/actions";

import NavBar from "../NavBar/NavBar";
import style from "../Bookdetail/Bookdetail.module.css"
import Reviews from "./Reviews";



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
   <div className={style.mainGridContainer}>
    <div >
    <NavBar/>
    </div>
    <div>
      <div className={style.Bookdetails}>
        <div className={style.bookImage}>
            <img  src={details.img}  alt="" />  
        </div>
            <div className={style.bookTextDetail}>
                <div >
                    <h1>{details.title}</h1> 
                     {/* <h1 >{(details.title).charAt(0).toUpperCase()}{ (details.title).slice(1)}</h1>   */}
                </div>
                <div >
                    <h2>Acerca del libro</h2>
                    <p>{details.description}</p>
                </div>
                <div className={style.buttonCategorycontainer}>
                    <button className={style.buttonCategory}>{details.category}</button>
                   

                </div >
                <div className={style.readBookButtonContainer} >
                <button onClick={handleReadButton}className={style.readBookButton}>Leer libro</button>
                </div>
            </div>
        </div>
      <Reviews/>
      
    </div>
    </div>
)
}

export default Bookdetail
