import React from 'react'
import { Link } from 'react-router-dom'

import './notFound.css'
const NotFound = () => {
  return (
    <div className="Container">
      <div className="text-Container">
        <h1>Ups que verguenza 😶</h1>
        <h2>Esta parte aun se encuentra en desarrollo!!💻👥</h2>
      </div>
      <section className="error-container">
        <span>
          <span>4</span>
        </span>
        <span>0</span>
        <span>
          <span>4</span>
        </span>
      </section>
      <div className="text-Container">
        <h2 className="text-Container">Regrese mas tarde 😀</h2>
        <Link to="/home">
          <div className="div-home">
            <button className="button-53" role="button">
              Home
            </button>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
