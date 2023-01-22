import { Link } from 'react-router-dom'
import style from "../Landing/Landing.module.css"
const Landing = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.contentBox}>
        <h1 className={style.bookYouLogo}>
          BOOK YOU
        </h1>
        <p >Welcome!</p>
        <p >
          Enter and connect with thousands of people around the world
        </p>
        <p >who share your birth for reading.</p>
        <p>What are you waiting for! ❤️</p>
        <Link to="/home">
          <button className={style.enterButton}>
            Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Landing
