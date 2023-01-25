import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Card from '../Card/Card'

import style from './Carousel.module.css'

const Carousel = () => {
  const libros = useSelector((state) => state.allBooks)
  const [currentIndex, setCurrentIndex] = useState(0)

  const librosPorPagina = 4
  const librosAMostrar = libros.slice(
    currentIndex * librosPorPagina,
    currentIndex * librosPorPagina + librosPorPagina,
  )
  const librosFaltantes = librosPorPagina - librosAMostrar.length
  const librosAMostrarCompletos = librosAMostrar.concat(libros.slice(0, librosFaltantes))

  const handleLeftArrowClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(Math.floor(libros.length / librosPorPagina))
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleRightArrowClick = () => {
    if (currentIndex === Math.floor(libros.length / librosPorPagina)) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  //-------------------
  const prevLibros = libros.slice(
    currentIndex === 0 ? libros.length - librosPorPagina : currentIndex - 1,
    currentIndex === 0 ? libros.length : currentIndex,
  )
  const nextLibros = libros.slice(
    currentIndex + librosPorPagina,
    currentIndex + librosPorPagina * 2,
  )
  const currentLibros = libros.slice(currentIndex, currentIndex + librosPorPagina)
  const allLibros = [...prevLibros, ...currentLibros, ...nextLibros]
  //-----------------------

  return (
    <div className={style.todo1}>
      <div className={style.librocarousel}>
        <div className={style.titulo}>
          <h3 className={style.h3}>Nuevo</h3>
        </div>
        <div className={style.contenedorprincipal}>
          <button className={style.izquierda} onClick={handleLeftArrowClick}>
            A
          </button>
          <div className={style.contenedorcarousel}>
            <div className={style.carousel}>
              {librosAMostrarCompletos.map((libro, index) => (
                <Card
                  key={index}
                  autor={libro.autor}
                  comentarios={libro.content}
                  estado={libro.subscription}
                  id={libro.id}
                  img={libro.img}
                  name={libro.title}
                />
              ))}
            </div>
          </div>
          <button className={style.derecha} onClick={handleRightArrowClick}>
            Z
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
