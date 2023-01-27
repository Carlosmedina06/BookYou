import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

import { getBookById } from '../../redux/actions'
import NavBar from '../NavBar/NavBar'
import style from '../Bookdetail/Bookdetail.module.css'

import Reviews from './Reviews'

const Bookdetail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const details = useSelector((state) => state.detail)

  useEffect(() => {
    dispatch(getBookById(id))
  }, [dispatch, id])

  const handleReadButton = (e) => {
    e.preventDefault()
    window.open(details.content)
  }

  const handletDelete = (e) => {
    e.preventDefault()
    axios
      .delete(`http://localhost:3001/book/delete/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res.data)
      })
  }
  const token = localStorage.getItem('token')

  const loginUserVerification = () => {
    if (!token) return false
    let decoded = jwt_decode(token)

    if (!details.user) return false
    if (!details.user.id) return false
    if (decoded.id === details.user.id) return true

    return false
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
              {/* <h1 >{(details.title).charAt(0).toUpperCase()}{ (details.title).slice(1)}</h1>   */}
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
              {loginUserVerification() ? (
                <button onClick={handletDelete}> eliminar libro </button>
              ) : null}
            </div>
          </div>
        </div>
        <Reviews />
      </div>
    </div>
  )
}

export default Bookdetail
