import React from 'react'
import { Link } from 'react-router-dom'

import style from '../Landing/LandingPage.module.css'

import '../Landing/ButtonHome.css'
import { BtnHome } from './btnRead'

function MainPage() {
  return (
    <div className={`${style.main_container}`}>
      <div className={`${style.main_left_container}`}>
        <h1 className={`${style.titleApp}`}>BOOK YOU</h1>
        <h3>Welcome!</h3>
        <div className={`${style.left_paragraph}`}>
          <p>
            Enter and connect with thousands of people around the world who share your birth for
            reading. What are you waiting for! ❤️
          </p>
        </div>
        <div className={`${style.LinkContainer}`}>
          <Link to="/404">
            <div className={style.buttonContainer}>
              <button className="button_home">Login</button>
            </div>
          </Link>
          <Link to="/404">
            <div className={style.buttonContainer}>
              <button className="button_home">Register</button>
            </div>
          </Link>
          <Link className={`${style.LinkHome}`} to="/home">
            <BtnHome>
              <p>Home</p>
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </BtnHome>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainPage
