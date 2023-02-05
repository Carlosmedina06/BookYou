import { Link } from 'react-router-dom'

import api from '../../utils/axios/axios.js'
import GetRateStars from '../GetRateStars/GetRateStars.jsx'

import styles from './UserBookCard.module.css'

function UserBookCard({ title, subs, img, id, author, rate, book }) {
  const handletDelete = (e) => {
    e.preventDefault()
    api
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

  let avgRate

  if (book.comment) {
    let sum = 0

    for (let i = 0; i < book.comment.length; i++) {
      sum += Number(book.comment[i].rate)
    }
    const average = sum / book.comment.length

    avgRate = Math.round(average * 10) / 10
  }

  return (
    <div className={styles.container}>
      <figure className={styles.bookCover}>
        <img alt="portada libro" src={img} />
      </figure>
      <section className={styles.bookInfo}>
        <h3>{title}</h3>
        <p className={styles.author}>{author}</p>
        <div>{avgRate ? <GetRateStars rate={avgRate} /> : <p>Aún sin calificar</p>}</div>
        <p>
          <span className={styles.statusBook}>{subs}</span>
        </p>
      </section>
      <section className={styles.options}>
        <div>
          <Link to={`/bookdetail/${id}`}>
            <button className={styles.optionButton}>
              <span>Detalle</span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default UserBookCard
