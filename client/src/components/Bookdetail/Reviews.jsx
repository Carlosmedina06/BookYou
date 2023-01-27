import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'

import GetRateStars from '../GetRateStars/GetRateStars'
import style from '../Bookdetail/Reviews.module.css'
import { getBookById } from '../../redux/actions/index'

const Reviews = ({ id }) => {
  const [rata, setRata] = useState(0) // NO TOCAR 🐭
  const dispatch = useDispatch()
  const book = useSelector((state) => state.detail)
  const [Review, setReview] = useState({
    rate: '',
    comment: '',
  })

  useEffect(() => {
    dispatch(getBookById(id))
  }, [dispatch, id, rata])

  const handleReview = (e) => {
    setReview({
      ...Review,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmitReview = (e) => {
    e.preventDefault()
    const coment = {
      comment: Review.comment,
      rate: Review.rate,
      id: id,
    }

    axios
      .post('https://bookyou-production.up.railway.app/comment/create/book', coment, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      // eslint-disable-next-line no-console
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.data)
        setRata(rata + 1) // lo siento estoy desesperado.
      })
    setReview({
      rate: '',
      comment: '',
    })
  }

  const token = localStorage.getItem('token')

  const loginUserVerification = () => {
    if (!token) return false

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

      {!book.comment ? (
        <div>Aun no hay Comentarios para este libro</div>
      ) : (
        book.comment
          ?.map((item, index) => (
            <div key={index} className={style.postedCommentsBox}>
              <div className={style.postedCommentsImg}>
                <img
                  alt=""
                  src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1674671180/user_icon_riocsx.png"
                />
              </div>
              <div>
                <div>{item.comment}</div>
                <div>{item.username ? item.username : 'username'} </div>
                <GetRateStars rate={item.rate} />
              </div>
            </div>
          ))
          .reverse()
      )}
    </div>
  )
}

export default Reviews
