import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { filterCategorys } from '../../redux/actions/index'
import style from '../FiltradoGenero/filtradoGenero.module.css'
import Card from '../Card/Card'



export const FiltradoGenero = ({ setShowFilterGenero, setBooks, books }) => {
  const dispatch = useDispatch()
  const [bookInput, setBookInput] = useState('todos')

  const allGeneros = useSelector((state) => state.category)
  
  let allBooks = useSelector((state) => state.books)
  /*  const [books, setBooks] = useState(useSelector((state) => state.books)) */
  console.log(allBooks,"-------------------");
  function handleFilterCategorys(e) {
    dispatch(filterCategorys(e.target.value))
    setBookInput(e.target.value)
    setBooks(!books)
    
  }
  if (bookInput !== 'todos') {
    setShowFilterGenero(false)
  } else if (bookInput === 'todos') {
    setShowFilterGenero(true)
  }
return (
    <div className={style.contenedor}>
      <select className={style.select} onChange={(e) => handleFilterCategorys(e)}>
        <option className={style.titulo} value="todos">
          {' '}
          Géneros{' '}
        </option>
        {allGeneros?.map((c) => (
          <option key={c.id}> {c.category} </option>
        ))}
      </select>
      <div className={style.cardConteiner}>
        {bookInput === 'todos' ? (
          <p />
        ) : (
          allBooks.map((book) => (
            <Card
              key={book.id}
              autor={book.autor}
              comentarios={book.content}
              estado={book.subscription}
              id={book.id}
              img={book.img}
              name={book.title}
            />
          ))
        )}
      </div>

      
    </div>
  )
}

export default FiltradoGenero