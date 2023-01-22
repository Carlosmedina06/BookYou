import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookById } from "../../redux/actions";


const Bookdetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const details = useSelector(state => state.detail)
    useEffect(() => {

        dispatch(getBookById(id))

    }, [dispatch, id])

    const handleReadButton = (e) => {
        e.preventDefault()
        window.open(details.content)

    }

    return (
        <div >
            <div >
                <div >
                    <div >
                        <img className="w-48" src={details.img} alt="" />
                    </div>
                    <div>
                        <div >
                            <h1 >{details.title}</h1>
                        </div>
                        <div >
                            <h2 >Acerca del libro</h2>
                            <p>{details.description}</p>
                        </div>
                        <div >
                            <button >{details.category}</button>


                        </div >
                        <div >
                            <button onClick={handleReadButton} >Leer libro</button>
                        </div>
                    </div>
                </div>
                <Reviews />
            </div>
        </div>
    )

}

export default Bookdetail