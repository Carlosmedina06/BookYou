import React from 'react';
import Card from './Card';
import style from "./Cards.module.css";


export default function Cards({libros}) {
  // acá va tu código
  // tip, podés usar un map
  console.log(libros); 
  
  return (<div className= {style.caja}> {
    libros.map(
      lib=> < Card 
      name = {lib[0].name.common} 
      autor = {lib[0].capital} 
      img = {lib[0].flags[1]}
      estado = {lib[0].continents}
      comentarios = {lib[0].population}
      id = {lib[0].idd.suffixes}
      key = {lib[0].idd.suffixes}
        />
      )}
    </div>  
  )
};