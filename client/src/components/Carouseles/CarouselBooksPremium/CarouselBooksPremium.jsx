import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Card from '../../Card/Card';

import style from '../../CssGenerico/Carousel.module.css';

const CarouselBooksPremium = ({ booksPaid }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const librosPorPagina = 4;
  const librosAMostrar = booksPaid.slice(
    currentIndex * librosPorPagina,
    currentIndex * librosPorPagina + librosPorPagina
  );
  const librosFaltantes = librosPorPagina - librosAMostrar.length;
  const librosAMostrarCompletos = librosAMostrar.concat(
    booksPaid.slice(0, librosFaltantes)
  );

  const handleLeftArrowClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(Math.floor(booksPaid.length / librosPorPagina));
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (currentIndex === Math.floor(booksPaid.length / librosPorPagina)) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  //-------------------
  const prevLibros = booksPaid.slice(
    currentIndex === 0 ? booksPaid.length - librosPorPagina : currentIndex - 1,
    currentIndex === 0 ? booksPaid.length : currentIndex
  );
  const nextLibros = booksPaid.slice(
    currentIndex + librosPorPagina,
    currentIndex + librosPorPagina * 2
  );
  const currentLibros = booksPaid.slice(
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
