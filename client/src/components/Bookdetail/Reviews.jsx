import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'

import GetRateStars from '../GetRateStars/GetRateStars'
import style from '../Bookdetail/Reviews.module.css'
let key = 0
// let bookComments = [
//   {
//     rate: '4',
//     comment:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
//   {
//     rate: '3',
//     comment:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
//   {
//     rate: '5',
//     comment:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   },
// ]
const Reviews = ({ id, comment }) => {
  let userlogged = true
  let bookComments = comment

  const initialState = {
    rate: '',
    comment: '',
  }
  const [Review, setReview] = useState(initialState)

  const handleReview = (e) => {
    setReview({
      ...Review,
      [e.target.name]: e.target.value,
    })
  }

  const handlePostReview = (e) => {
    e.preventDefault()
    //  dispatch(postBookReview(e))
  }
  const handleSubmitReview = (e) => {
    e.preventDefault()
    const coment = {
      comment: Review.comment,
      rate: Review.rate,
      id: id,
    }

    axios
      .post('http://localhost:3001/comment/create/book', coment, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => console.log(res.data))
    setReview(initialState)
  }
  const token = localStorage.getItem('token')

  const loginUserVerification = () => {
    if (!token) return false

    return true
  }

  // const handleSubmitReview = (e) => {
  //   e.preventDefault()
  //   bookComments.push(Review)
  //   setReview(initialState)
  // }

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
            {/* <button onClick={handlePostReview} className={style.postReviewButton} type="submit" value="Enviar">Enviar db</button> */}
          </form>
        </div>
      )}

      {!bookComments ? (
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
              <div>{item.username ? item.username : 'username'} </div>
              <GetRateStars rate={item.rate} />
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default Reviews
