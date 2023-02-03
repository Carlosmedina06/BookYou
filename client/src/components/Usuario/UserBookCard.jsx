// import { AiOutlineSearch, AiOutlineDelete, AiOutlineEdit } from 'react-icons/Ai'

import { NavLink } from 'react-router-dom'

import api from '../../utils/axios/axios.js'
import loginUserVerification from '../../utils/Functions/LoginUserVerification'
import rutaApi from '../../../API/api'

import styles from './UserBookCard.module.css'
import image from './libro-1.jpg'

function UserBookCard({ key, title, description, subs, img, id, author }) {
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

  return (
    <div className={styles.container}>
      <figure className={styles.bookCover}>
        <img alt="portada libro" src={img} />
      </figure>
      <section className={styles.bookInfo}>
        <h3>{title}</h3>
        <p className={styles.author}>{author}</p>
        <p>{description}</p>
        <p>{description}</p>
        <p>
          <span className={styles.statusBook}>{subs}</span>
        </p>
      </section>
      <section className={styles.options}>
        <div>
          <NavLink to={`/bookdetail/${id}`}>
            <button className={styles.optionButton}>
              <span>Ver</span>
              <span>{/* <AiOutlineSearch /> */}</span>
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  )
}

export default UserBookCard
