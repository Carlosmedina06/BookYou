import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { BiUserCircle } from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import jwt_decode from 'jwt-decode'

import GetRateStars from '../GetRateStars/GetRateStars'
import style from '../Bookdetail/Reviews.module.css'
import api from '../../utils/axios/axios.js'
import { getPalabrasProhibidas } from '../../redux/actions'

import {
  ImgContainer,
  ReviewContainer,
  ReviewContent,
  ReviewText,
  ReviewDate,
  ButtonReport,
  ButtonContent,
} from './ReviewStyle'

const Reviews = ({ id, comment, setRata, rata }) => {
  const [Review, setReview] = useState({
    rate: '',
    comment: '',
    report: 0,
  })

  const allPalabras = useSelector((state) => state.palabrasProhibidas)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPalabrasProhibidas())
  }, [dispatch])

  const userVerification = (token, item) => {
    if (!token) return false
    let decoded = jwt_decode(token)

    if (decoded.role === 'admin') return true
    if (decoded.id === item.user) return true

    return false
  }

  const handleReview = (e) => {
    setReview({
      ...Review,
      [e.target.name]: e.target.value,
    })
  }

  allPalabras.forEach((palabra) => {
    if (Review.comment.toLowerCase().includes(palabra.toLowerCase())) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'El mensaje contiene palabras inapropiadas',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
          setReview({ ...Review, comment: '' })
        }
      })
    }
  })

  const handleDelete = (id) => {
    api
      .put(`/comment/delete/${id}`, null, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((_res) => {
        // eslint-disable-next-line no-console
        console.log(_res.data)
        setRata(rata - 1)
      })
      .then(
        Swal.fire({
          icon: 'success',
          title: 'Comentario eliminado',
          showConfirmButton: false,
          timer: 1500,
        }),
      )
  }

  const handleReport = (id) => {
    const newReport = {
      ...Review,
      report: Review.report++,
    }

    api
      .put(`/comment/update/${id}`, newReport, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((_res) => {
        // eslint-disable-next-line no-console
        Swal.fire({
          icon: 'success',
          title: 'Gracias por tu reporte',
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }

  const handleSubmitReview = async (e) => {
    e.preventDefault()
    const coment = {
      comment: Review.comment,
      rate: Review.rate,
      id: id,
    }

    api
      .post('/comment/create/book', coment, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data)
        setRata(rata + 1)
      })
    await setReview({
      rate: '',
      comment: '',
    })
    Swal.fire({
      icon: 'success',
      title: 'Gracias por tu comentario',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  // si estas logueado te muestra el formulario para comentar
  const loginUserVerification = () => {
    if (!window.localStorage.getItem('token')) return false

    return true
  }

  return (
    <div className={style.commentsContainer}>
      {loginUserVerification() ? <div>Califica este libro</div> : null}
      {loginUserVerification() ? (
        <div className={style.StarContainer}>
          <div className={style.starWidget}>
            <input id="rate-5" name="rate" type="radio" value="5" onClick={handleReview} />
            <label className="fas fa-star" htmlFor="rate-5">
              <FontAwesomeIcon icon={faStar} />
            </label>
            <input id="rate-4" name="rate" type="radio" value="4" onClick={handleReview} />
            <label className={faStar} htmlFor="rate-4">
              <FontAwesomeIcon icon={faStar} />
            </label>
            <input id="rate-3" name="rate" type="radio" value="3" onClick={handleReview} />
            <label className={faStar} htmlFor="rate-3">
              <FontAwesomeIcon icon={faStar} />
            </label>
            <input id="rate-2" name="rate" type="radio" value="2" onClick={handleReview} />
            <label className={faStar} htmlFor="rate-2">
              <FontAwesomeIcon icon={faStar} />
            </label>
            <input id="rate-1" name="rate" type="radio" value="1" onClick={handleReview} />
            <label className={faStar} htmlFor="rate-1">
              <FontAwesomeIcon icon={faStar} />
            </label>
          </div>
        </div>
      ) : null}
      {Review.rate && (
        <div>
          <form className={style.addReviewForm} onSubmit={handleSubmitReview}>
            <textarea
              className="border border-black"
              cols="50"
              name="comment"
              placeholder="Agregar comentario"
              rows="3"
              value={Review.comment}
              onChange={handleReview}
            />
            <button className={style.postReviewButton} type="submit" value="Enviar">
              Enviar
            </button>
          </form>
        </div>
      )}

      {!comment ? (
        <div>Aun no hay Comentarios para este libro</div>
      ) : (
        comment
          ?.map((item) =>
            item.available ? (
              <ReviewContainer key={item.id}>
                <ImgContainer>
                  <BiUserCircle />
                </ImgContainer>
                <ReviewContent>
                  <ReviewText>
                    <div>
                      <h2>{item.username ? item.username : 'username'}</h2>
                    </div>
                    <div>
                      <p>{item.comment}</p>
                    </div>
                    <GetRateStars rate={item.rate} />
                  </ReviewText>
                  <ReviewDate>
                    <ButtonContent>
                      {window.localStorage.getItem('token') && (
                        <ButtonReport onClick={() => handleReport(item.id)}>Reportar</ButtonReport>
                      )}
                      {userVerification(window.localStorage.getItem('token'), item) && (
                        <ButtonReport onClick={() => handleDelete(item.id)}>Eliminar</ButtonReport>
                      )}
                      <p style={{ 'margin-right': '250px' }}>{item.createdAt.slice(0, 10)}</p>
                    </ButtonContent>
                  </ReviewDate>
                </ReviewContent>
              </ReviewContainer>
            ) : null,
          )
          .reverse()
      )}
    </div>
  )
}

export default Reviews
