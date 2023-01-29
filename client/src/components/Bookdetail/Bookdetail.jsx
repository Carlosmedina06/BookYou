import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { getBookById } from '../../redux/actions'
import NavBar from '../NavBar/NavBar'
import style from '../Bookdetail/Bookdetail.module.css'
import loginUserVerification from '../../utils/Functions/LoginUserVerification'
import { clearBookDetails } from '../../redux/actions'

import Reviews from './Reviews'

const Bookdetail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const details = useSelector((state) => state.detail)
  const [rata, setRata] = useState(0) // NO TOCAR 🐭  const [rata, setRata] = useState(0) // NO TOCAR 🐭

  console.log('🐭')

  useEffect(() => {
    dispatch(clearBookDetails())
    dispatch(getBookById(id))
  }, [dispatch, id, rata])

  const handleReadButton = (e) => {
    e.preventDefault()
    window.open(details.content)
  }

  const handletDelete = (e) => {
    e.preventDefault()
    axios
      .delete(`https://bookyou-production.up.railway.app/book/delete/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data)
      })
  }

  return (
    <div className={style.mainGridContainer}>
      <div>
        <NavBar />
      </div>
      <div>
        <div className={style.Bookdetails}>
          <div className={style.bookImage}>
            <img alt="" src={details.img} />
          </div>
          <div className={style.bookTextDetail}>
            <div>
              <h1>{details.title}</h1>
            </div>
            <div>
              <h2>Acerca del libro</h2>
              <p>{details.description}</p>
            </div>
            <div className={style.buttonCategorycontainer}>
              <button className={style.buttonCategory}>{details.category}</button>
            </div>
            <div className={style.readBookButtonContainer}>
              <button className={style.readBookButton} onClick={handleReadButton}>
                Leer libro
              </button>
              <br />
              <br />
              {loginUserVerification(localStorage.getItem('token'), details) ? (
                <button onClick={handletDelete}> eliminar libro </button>
              ) : null}
            </div>
          </div>
        </div>
        <Reviews comment={details.comment} id={details.id} rata={rata} setRata={setRata} />
      </div>
    </div>
  )
}

export default Bookdetail
