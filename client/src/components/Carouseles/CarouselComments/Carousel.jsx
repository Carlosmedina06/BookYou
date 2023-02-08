import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Card from '../../Card/Card'
import style from '../../CssGenerico/Carousel.module.css'

const Carousel = () => {
  const libros = useSelector((state) => state.allBooksCarousel)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dataReady, setDataReady] = useState(false)

  useEffect(() => {
    if (libros.length > 0) {
      setDataReady(true)
    } else if (libros.length === 0) {
      setDataReady(false)
    }
  }, [libros])

  const librosOrdenados = dataReady
    ? [...libros]
      .sort((a, b) => {
        const aComments = a.comment ? a.comment.length : 0
        const bComments = b.comment ? b.comment.length : 0

        return bComments - aComments
      })
      .slice(0, 8)
    : []

  const librosPorPagina = 4

  const librosAMostrar = librosOrdenados.slice(
    currentIndex * librosPorPagina,
    currentIndex * librosPorPagina + librosPorPagina,
  )
  const librosFaltantes = librosPorPagina - librosAMostrar.length
  const librosAMostrarCompletos = librosAMostrar.concat(librosOrdenados.slice(0, librosFaltantes))

  const handleLeftArrowClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(Math.floor(librosOrdenados.length / librosPorPagina))
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleRightArrowClick = () => {
    if (currentIndex === Math.floor(librosOrdenados.length / librosPorPagina)) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  //-------------------

  const prevLibros = librosOrdenados.slice(
    currentIndex === 0 ? libros.length - librosPorPagina : currentIndex - 1,
    currentIndex === 0 ? libros.length : currentIndex,
  )
  const nextLibros = librosOrdenados.slice(
    currentIndex + librosPorPagina,
    currentIndex + librosPorPagina * 2,
  )
  const currentLibros = librosOrdenados.slice(currentIndex, currentIndex + librosPorPagina)
  const allLibros = [...prevLibros, ...currentLibros, ...nextLibros]

  //-----------------------

  return (
    <div className={style.todo1}>
      <div className={style.librocarousel}>
        <div className={style.contenedorprincipal}>
          <button className={style.izquierda} onClick={handleLeftArrowClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className={style.contenedorcarousel}>
            <div className={style.carousel}>
              {librosAMostrarCompletos.map((libro, index) => (
                <Card
                  key={index}
                  autor={libro.author}
                  estado={libro.subscription}
                  id={libro.id}
                  img={libro.img}
                  name={libro.title}
                />
              ))}
            </div>
          </div>
          <button className={style.derecha} onClick={handleRightArrowClick}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
