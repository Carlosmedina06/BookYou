import React from 'react';
import { Link } from 'react-router-dom';

import style from '../Landing/LandingPage.module.css';

import '../Landing/ButtonHome.css';
import { BtnHome } from './btnRead';
import IconRight from './IconRight';
import IconLeft from './IconLeft';

function MainPage() {
  return (
    <div className={style.wrapper}>
      <section className={style.containerSection}>
        <div className={style.containerTitle}>
          <h1 className={style.logo}>BookYou</h1>
        </div>
        <div className={style.groupContain}>
          <div className={style.simpleContain}>
            <div className={style.info}>
              <p>
                Únete a nuestra comunidad de amantes de los libros. Descubre una
                amplia selección de títulos y haz un buen negocio vendiendo tus
                obras. Registrate y comienza a compartir tu pasión por la
                lectura.
              </p>
              <p>
                Conecta con otros entusiastas y expande tu colección de libros
                con facilidad. Unirte a nuestra comunidad significa tener acceso
                a una variedad interminable de títulos, a precios accesibles.
              </p>
            </div>
            <div>
              <IconRight />
            </div>
          </div>
          <div className={style.simpleContain}>
            <div>
              <IconLeft />
            </div>
            <div className={style.info}>
              <ol>
                <li>Crea una cuenta.</li>
                <li>Entra a tu perfil y haz clic en "Añadir libro".</li>
                <li>
                  Sube una foto del libro y proporciona información básica, como
                  título, autor y descripción. Selecciona una membresía y
                  publica el libro.
                </li>
                <li>
                  Eso es todo! Ahora estás listo para vender tus libros y
                  descubrir nuevos títulos interesantes.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <div className={`${style.main_container}`}>
        <div className={`${style.main_left_container}`}>
          <h1 className={`${style.titleApp}`}>BOOK YOU</h1>
          <h3>Welcome!</h3>
          <div className={`${style.left_paragraph}`}>
            <p>
              Enter and connect with thousands of people around the world who
              share your birth for reading. What are you waiting for! ❤️
            </p>
          </div>
          <div className={`${style.LinkContainer}`}>
            <Link to="/login">
              <div className={style.buttonContainer}>
                <button className="button_home">Login</button>
              </div>
            </Link>
            <Link to="/signup">
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
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </BtnHome>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
