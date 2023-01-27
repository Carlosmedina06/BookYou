// import { AiOutlineSearch, AiOutlineDelete, AiOutlineEdit } from 'react-icons/Ai'

import styles from './UserBookCard.module.css'
import image from './libro-1.jpg'

function UserBookCard() {
  return (
    <div className={styles.container}>
      <figure className={styles.bookCover}>
        <img alt="portada libro" src={image} />
      </figure>
      <section className={styles.bookInfo}>
        <h3>Danza de Dragones</h3>
        <p className={styles.author}>George R.R. Martin</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel exercitationem fugit tempora
          inventore iste asperiores quis obcaecati amet accusantium natus...
        </p>
        <p>
          <span className={styles.statusBook}>Free</span>
        </p>
      </section>
      <section className={styles.options}>
        <div>
          <button className={styles.optionButton}>
            <span>Ver</span>
            <span>{/* <AiOutlineSearch /> */}</span>
          </button>
        </div>
        <div>
          <button className={styles.optionButton}>
            <span>Eliminar</span>
            <span>{/* <AiOutlineDelete /> */}</span>
          </button>
        </div>
        <div>
          <button className={styles.optionButton}>
            <span>Editar</span>
            <span>{/* <AiOutlineEdit /> */}</span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default UserBookCard
