import React, { useState } from 'react';

import Card from "./Card";
import style from "./Carousel.module.css";


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const libros = [
        {
            estado:"concluido",
            comentarios:26,
            id:2,
            autor:"choque",
            name: "El señor de los anillos",
          
        },
        {
            estado:"concluido",
            comentarios:246,
            id:1,
            autor:"choque",
            name: "Harry Potter y la piedra filosofal",
        },
        {
            estado:"sin terminar",
            comentarios:266,
            id:2,
            autor:"choque",
            name: "El señor de los anillos",
          
        },
        {
            estado:"concluido",
            comentarios:46,
            id:1,
            autor:"choque",
            name: "Harry Potter y la piedra filosofal",
        },
        {
            estado:"concluido",
            comentarios:24,
            id:2,
            autor:"choque",
            name: "El señor de los anillos",
          
        },
        {
            estado:"sin terminar",
            comentarios:246,
            id:1,
            autor:"",
            name: "Harry Potter y la piedra filosofal",
        },
        {
            estado:"concluido",
            comentarios:246,
            id:2,
            autor:"choque",
            name: "El señor de los anillos",
          
        },
        {
            estado:"sin terminar",
            comentarios:246,
            id:1,
            autor:"",
            name: "Harry Potter y la piedra filosofal",
        },
        {
            estado:"sin terminar",
            comentarios:246,
            id:2,
            autor:"choque",
            name: "El señor de los anillos",
          
        },
        {
            estado:"concluido",
            comentarios:246,
            id:1,
            autor:"choque",
            name: "Harry Potter y la piedra filosofal",
        },
        {
            estado:"sin terminar",
            comentarios:246,
            id:1,
            autor:"choque",
            name: "Harry Potter y la piedra filosofal",
        },
        {
            estado:"concluido",
            comentarios:246,
            id:2,
            autor:"choque",
            name: "El señor de los anillos",
          
        },
        {
            estado:"concluido",
            comentarios:246,
            id:1,
            autor:"choque",
            name: "Harry Potter y la piedra filosofal",
        },
        // agrega más libros aquí
      ];
      
    const librosPorPagina = 5;
    const librosAMostrar = libros.slice(currentIndex * librosPorPagina, currentIndex * librosPorPagina + librosPorPagina);
    const librosFaltantes = librosPorPagina - librosAMostrar.length;
    const librosAMostrarCompletos = librosAMostrar.concat(libros.slice(0, librosFaltantes));
      
  
    const handleLeftArrowClick = () => {
        if (currentIndex === 0) {
          setCurrentIndex(Math.floor(libros.length / librosPorPagina));
        } else {
          setCurrentIndex(currentIndex - 1);
        }
      };
      
      
  
    const handleRightArrowClick = () => {
        if (currentIndex === Math.floor(libros.length / librosPorPagina)) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      };
      
//-------------------
    const prevLibros = libros.slice(
    currentIndex === 0 ? libros.length - librosPorPagina : currentIndex - 1,
    currentIndex === 0 ? libros.length : currentIndex
    );
    const nextLibros = libros.slice(currentIndex + librosPorPagina, currentIndex + librosPorPagina * 2);
    const currentLibros = libros.slice(currentIndex, currentIndex + librosPorPagina);
    const allLibros = [...prevLibros, ...currentLibros, ...nextLibros];
    //-----------------------

      console.log(allLibros);
    return (
        <div className={style.todo1}>

        <div className={style.librocarousel}>
        <div class={style.titulo}>
            <h3>Nuevo Contenido</h3>

        </div>
        <div className={style.contenedorprincipal}>

            <button onClick={handleLeftArrowClick} className={style.izquierda}>
                A
            </button>
            <div className={style.contenedorcarousel}>

            <div className={style.carousel}>
                {librosAMostrarCompletos.map((libro, index) => (
                    <Card
                    estado={libro.estado}
                    comentarios = {libro.comentarios}
                    autor = {libro.autor}
                    id= {libro.id}
                    key={index}
                    name={libro.titulo}
                    />
                    ))}
            </div>
            </div>
            <button onClick={handleRightArrowClick} className={style.derecha}>
                Z
            </button>
                    </div>
        </div>
                        </div>
    );
}

export default Carousel;
