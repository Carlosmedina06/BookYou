import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


import NavBar from '../NavBar/NavBar';
import portada from './7442df453f2197f67249ab1b49ebb44b.jpg';
import perfil from './271812565_2088201441327034_8800356643564968973_n.png';
import style from './Usuario.module.css'

import Carousel from '../CarouselRecomendados/Carousel';
import CarouselPV from '../CarouselParaVos/Carousel';
import CarouselN from '../CarouselNuevos/Carousel';
import SearchBar from '../SearchBar/SearchBar';



export const Usuario = () => {
 
  return (

    <div >
      <div className=" grid col-span-3">
        <NavBar />
      </div>
      <img src={portada} alt="Mi imagen" className={style.portada}/>
      <img src={perfil} alt="Mi imagen" className={style.perfil}/>
      <div className={style.nombre}>
        <h3 className={style.nombre1}>Nombre de Usuario</h3>
        <p >Apodo</p>
      </div>
 
    </div>
  );
};
