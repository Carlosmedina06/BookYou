import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, Link } from 'react-router-dom'

import api from '../../utils/axios/axios.js'
import { getBookById, setLoader } from '../../redux/actions'
import NavBar from '../NavBar/NavBar'
import style from '../Bookdetail/Bookdetail.module.css'
import loginUserVerification from '../../utils/Functions/LoginUserVerification'
import { clearBookDetails } from '../../redux/actions'
import GetRateStars from '../GetRateStars/GetRateStars.jsx'
import Loader from '../Loader/Loader.jsx'

import Reviews from './Reviews'

const Bookdetail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const details = useSelector((state) => state.detail)
  const navigation = useNavigate()

  const [rata, setRata] = useState(0) // NO TOCAR 🐭

  const [books, setBooks] = useState(false) /* actualizar estado libros orden alf */
  const loading = useSelector((state) => state.loading)

  const token = localStorage.getItem('token')
  let decoded = token ? jwt_decode(token) : null

  let avgRate

  if (details.comment) {
    let sum = 0

    for (let i = 0; i < details.comment.length; i++) {
      sum += Number(details.comment[i].rate)
    }
    const average = sum / details.comment.length

    avgRate = Math.round(average * 10) / 10
  } else {
    null
  }

  useEffect(() => {
    dispatch(setLoader(true))
    dispatch(clearBookDetails())
    dispatch(getBookById(id))

    // if(details.length === 0) setLoader(true)
  }, [dispatch, id, rata])

  const handleReadButton = (e) => {
    e.preventDefault()
    window.open(details.content)
  }

  const handletDelete = (e) => {
    e.preventDefault()
    api
      .put(`/book/delete/${id}`, null, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data)
        navigation('/home')
      })
  }
  const handletEdit = (id) => {
    navigation(`/book/edit/${id}`)
  }

  return (
    <>
      <div className={style.mainGridContainer}>
        <div>
          <NavBar />
        </div>
        {loading && <Loader />}
        {!loading && (
          <div>
            <div className={style.Bookdetails}>
              <div className={style.bookImage}>
                <img alt={details.title} src={details.img} />
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
                {window.localStorage.getItem('token') && (
                  <Link to={`/usuario/${details.user?.id}`}>
                    <p className={style.perfilBoton}>{details.user?.username}</p>
                  </Link>
                )}
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
                      <button className={style.boton} onClick={() => handletEdit(details.id)}>
                        <span className={style.btnText}>Editar</span>
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          style={{
            position: 'absolute',
            top: '520px',
            left: '300px',
          }}
        >
          <button className={style.boton} onClick={() => setBooks(!books)}>
            {books ? (
              <span className={style.btnText}>Ocultar Comentarios</span>
            ) : (
              <span className={style.btnText}>Mostrar Comentarios</span>
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
      <div style={{ position: 'absolute', top: '110px', left: '530px', transform: 'scale(1.5)' }}>
        <GetRateStars rate={avgRate} />
      </div>
    </>
  )
}

export default Bookdetail
