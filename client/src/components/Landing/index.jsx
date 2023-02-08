import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getBooks, getUsers } from '../../redux/actions'
import style from '../Landing/LandingPage.module.css'

import '../Landing/ButtonHome.css'
import Footer from '../Footer/Footer'

import { BtnHome } from './btnRead'
import IconRight from './IconRight'
import IconLeft from './IconLeft'

function MainPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
    dispatch(getUsers())
  }, [dispatch])

  return (
    <>
      <div className={style.wrapper}>
        <section className={style.containerSection}>
          <div className={style.containerTitle}>
            <h1 className={style.logo}>BookYou</h1>s
          </div>
          <div className={style.groupContain}>
            <div className={style.simpleContain}>
              <div className={style.info}>
                <p className={style.paragraphLeft}>
                  Únete a nuestra comunidad de amantes de los libros. Descubre una amplia selección
                  de títulos y haz un buen negocio vendiendo tus obras. Regístrate y comienza a
                  compartir tu pasión por la lectura.
                </p>
                <p className={style.paragraphLeft}>
                  Conecta con otros entusiastas y expande tu colección de libros con facilidad.
                  Unirte a nuestra comunidad significa tener acceso a una variedad interminable de
                  títulos, a precios accesibles.
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
                <ol className={style.paragraphRight}>
                  <li>
                    <span className={style.numbers}>1</span>Crea una cuenta.
                  </li>
                  <li>
                    <span className={style.numbers}>2</span>Entra a tu perfil y haz clic en "Crear
                    libro".
                  </li>
                  <li>
                    <span className={style.numbers}>3</span>Sube una foto del libro y proporciona
                    información básica, como título, autor y descripción. Selecciona una membresía y
                    publica el libro.
                  </li>
                  <li>
                    ¡Eso es todo! Ahora estás listo para vender tus libros y descubrir nuevos
                    títulos interesantes.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <div className={`${style.main_container}`}>
          <div className={`${style.main_left_container}`}>
            <h2 className={`${style.titleApp}`}>BIENVENIDO</h2>
            <div className={`${style.left_paragraph}`}>
              <p>
                Ingresa y conéctate con miles de personas alrededor del mundo que comparten tu
                pasión por la lectura. ❤️
              </p>
            </div>
            <div className={`${style.LinkContainer}`}>
              {window.localStorage.getItem('token') ? (
                <></>
              ) : (
                <>
                  <Link to="/login">
                    <div className={style.buttonContainer}>
                      <button className="button_home">Inicia Sesión</button>
                    </div>
                  </Link>
                  <Link to="/signup">
                    <div className={style.buttonContainer}>
                      <button className="button_home">Regístrate</button>
                    </div>
                  </Link>
                </>
              )}
              <Link className={`${style.LinkHome}`} to="/home">
                <BtnHome>
                  <p>Inicio</p>
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
      <Footer />
    </>
  )
}

export default MainPage
