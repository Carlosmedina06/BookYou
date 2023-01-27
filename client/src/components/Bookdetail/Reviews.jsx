import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import GetRateStars from '../GetRateStars/GetRateStars'
import style from '../Bookdetail/Reviews.module.css'
let key = 0
let bookComments = [
  {
    rate: '4',
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    rate: '3',
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    rate: '5',
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
]
const Reviews = () => {
  let userlogged = true
  const dispatch = useDispatch()

  const initialState = {
    rate: '',
    comment: '',
  }
  const [Review, setReview] = useState(initialState)

  const handleReview = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setReview({
      ...Review,
      [e.target.name]: e.target.value,
    })
    console.log(Review)
  }

  const handlePostReview = (e) => {
    e.preventDefault()
    //  dispatch(postBookReview(e))
  }
  const handleSubmitReview = (e) => {
    e.preventDefault()
    console.log(Review)
    bookComments.push(Review)
    console.log('soy bookcomments')
    console.log(bookComments)
    setReview(initialState)
  }

  if (!userlogged) {
    return (
      <div className={style.textLoginBanner}>
        <div>
          <p>Deseas agregar un comentario?</p>
          <p>
            ingresa a tu cuenta{' '}
            <Link to="/404">
              <button className={style.readBookButton}>Log In</button>
            </Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={style.commentsContainer}>
      <div>Califica este libro</div>
      <div className={style.StarContainer}>
        <div className={style.starWidget}>
          <input
            id="rate-5"
            name="rate"
            name="rate"
            type="radio"
            value="5"
            onClick={handleReview}
          />
          <label className="fas fa-star" htmlFor="rate-5">
            <FontAwesomeIcon icon={faStar} />
          </label>
          <input
            id="rate-4"
            name="rate"
            name="rate"
            type="radio"
            value="4"
            onClick={handleReview}
          />
          <label className={faStar} htmlFor="rate-4">
            <FontAwesomeIcon icon={faStar} />
          </label>
          <input
            id="rate-3"
            name="rate"
            name="rate"
            type="radio"
            value="3"
            onClick={handleReview}
          />
          <label className={faStar} htmlFor="rate-3">
            <FontAwesomeIcon icon={faStar} />
          </label>
          <input
            id="rate-2"
            name="rate"
            name="rate"
            type="radio"
            value="2"
            onClick={handleReview}
          />
          <label className={faStar} htmlFor="rate-2">
            <FontAwesomeIcon icon={faStar} />
          </label>
          <input
            id="rate-1"
            name="rate"
            name="rate"
            type="radio"
            value="1"
            onClick={handleReview}
          />
          <label className={faStar} htmlFor="rate-1">
            <FontAwesomeIcon icon={faStar} />
          </label>
        </div>
      </div>
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
            {/* <button onClick={handlePostReview} className={style.postReviewButton} type="submit" value="Enviar">Enviar db</button> */}
          </form>
        </div>
      )}

      {!bookComments.length ? (
        <div>Aun no hay Comentarios para este libro</div>
      ) : (
        bookComments?.map((item) => (
          <div key={key++} className={style.postedCommentsBox}>
            <div className={style.postedCommentsImg}>
              <img
                alt=""
                src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1674671180/user_icon_riocsx.png"
              />
            </div>
            <div>
              <div>{item.comment}</div>
              <div> Usarname </div>
              <GetRateStars rate={item.rate} />
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Reviews
