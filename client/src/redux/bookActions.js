import axios from 'axios'
import { getAllBooks, getBookById } from './bookSlice'

export const getBooks = ()=>(dispatch)=>{

}

export function filterGeneros(payload) {
  return {
    type: "FILTER_GENEROS",
    payload,
  };
}