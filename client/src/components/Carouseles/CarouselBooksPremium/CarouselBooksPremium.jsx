import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Card from '../../Card/Card';

import style from '../../CssGenerico/Carousel.module.css';

const CarouselBooksPremium = () => {
  const libros = useSelector(state => state.allBooks);
  const [currentIndex, setCurrentIndex] = useState(0);

  const booksPremium = libros.filter(b => b.subscription === 'premium');

  const librosPorPagina = 4;
  const librosAMostrar = booksPremium.slice(
    currentIndex * librosPorPagina,
    currentIndex * librosPorPagina + librosPorPagina
  );
  const librosFaltantes = librosPorPagina - librosAMostrar.length;
  const librosAMostrarCompletos = librosAMostrar.concat(
    booksPremium.slice(0, librosFaltantes)
  );

  const handleLeftArrowClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(Math.floor(booksPremium.length / librosPorPagina));
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (currentIndex === Math.floor(booksPremium.length / librosPorPagina)) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  //-------------------
  const prevLibros = booksPremium.slice(
    currentIndex === 0
      ? booksPremium.length - librosPorPagina
      : currentIndex - 1,
    currentIndex === 0 ? booksPremium.length : currentIndex
  );
  const nextLibros = booksPremium.slice(
    currentIndex + librosPorPagina,
    currentIndex + librosPorPagina * 2
  );
  const currentLibros = booksPremium.slice(
    currentIndex,
    currentIndex + librosPorPagina
  );
  const allLibros = [...prevLibros, ...currentLibros, ...nextLibros];
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
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselBooksPremium;
