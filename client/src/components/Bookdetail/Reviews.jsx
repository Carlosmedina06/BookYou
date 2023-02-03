import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import { BiUserCircle } from 'react-icons/bi'

import GetRateStars from '../GetRateStars/GetRateStars'
import style from '../Bookdetail/Reviews.module.css'
import api from '../../utils/axios/axios.js'

import { ImgContainer, ReviewContainer, ReviewContent, ReviewText, ReviewDate } from './ReviewStyle'

const Reviews = ({ id, comment, setRata, rata }) => {
  const [Review, setReview] = useState({
    rate: '',
    comment: '',
  })

  const handleReview = (e) => {
    setReview({
      ...Review,
      [e.target.name]: e.target.value,
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
          ?.map((item, index) => (
            <ReviewContainer key={index}>
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
                  <p>{item.createdAt.slice(0, 10)}</p>
                </ReviewDate>
              </ReviewContent>
            </ReviewContainer>
          ))
          .reverse()
      )}
    </div>
  )
}

export default Reviews
