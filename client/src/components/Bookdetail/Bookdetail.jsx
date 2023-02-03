import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Navigate } from 'react-router-dom'

import rutaApi from '../../../API/api'
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

  const [rata, setRata] = useState(0) // NO TOCAR 🐭
  const [books, setBooks] = useState(true) /* actualizar estado libros orden alf */

  const token = localStorage.getItem('token')
  let decoded = token ? jwt_decode(token) : null

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
      .delete(`https://server-bookyou.onrender.com/book/delete/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data)
        Navigate('/home')
      })
  }
  const handletEdit = (e) => {
    e.preventDefault()
    rutaApi
      .delete(`/book/delete/${id}`, {
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
              {details.subscription === 'free' ? (
                <button className={style.readBookButton} onClick={handleReadButton}>
                  Leer libro
                </button>
              ) : decoded ? (
                loginUserVerification(localStorage.getItem('token'), details) ? (
                  <button className={style.readBookButton} onClick={handleReadButton}>
                    Leer libro
                  </button>
                ) : decoded.subsscription === 'premium' ? (
                  <button className={style.readBookButton} onClick={handleReadButton}>
                    Leer libro
                  </button>
                ) : (
                  <div>
                    <NavLink to="/suscripcion">
                      <button className={style.buttonSuscribe}>Suscribirse</button>
                    </NavLink>
                  </div>
                )
              ) : (
                <div>
                  <NavLink to="/suscripcion">
                    <button className={style.buttonSuscribe}>Suscribirse</button>
                  </NavLink>
                </div>
              )}
              {loginUserVerification(localStorage.getItem('token'), details) ? (
                <>
                  <button className={style.boton} onClick={handletDelete}>
                    <span className={style.btnText}>Eliminar</span>
                  </button>
                  <button className={style.boton} onClick={handletEdit}>
                    <span className={style.btnText}>Editar</span>
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '480px',
            left: '300px',
          }}
        >
          <button className={style.boton} onClick={() => setBooks(!books)}>
            {books ? (
              <span className={style.btnText}>Ocultar</span>
            ) : (
              <span className={style.btnText}>Mostrar</span>
            )}
            <FontAwesomeIcon
              icon={books ? faChevronUp : faChevronDown}
              style={{ fontSize: '0.7em' }}
            />
          </button>
        </div>
        {books && (
          <Reviews comment={details.comment} id={details.id} rata={rata} setRata={setRata} />
        )}
      </div>
    </div>
  )
}

export default Bookdetail
