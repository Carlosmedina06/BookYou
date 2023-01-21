import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
/* import { useEffect } from 'react' */

import { filterCategorys } from '../../redux/actions/index'
import style from '../FiltradoGenero/filtradoGenero.module.css'
import Card from '../Card/Card'
import { Paginated } from '../Paginated/paginated'

export const FiltradoGenero = ({ setShowFilterGenero, showFilterGenero }) => {
  const dispatch = useDispatch()
  const [bookInput, setBookInput] = useState('todos')

  const allGeneros = useSelector((state) => state.category)
  let allBooks = useSelector((state) => state.books)

  function handleFilterCategorys(e) {
    dispatch(filterCategorys(e.target.value))
    setBookInput(e.target.value)
    /* console.log(e.target.value) */
  }

  if (bookInput !== 'todos') {
    setShowFilterGenero(false)
  } else if (bookInput === 'todos') {
    setShowFilterGenero(true)
  }

  console.log(showFilterGenero)
  /*  console.log(bookInput) */

  return (
    <div className={style.contenedor}>
      <select onChange={(e) => handleFilterCategorys(e)}>
        <option className={style.titulo} selected="selected" value="todos">
          {' '}
          Géneros{' '}
        </option>
        {allGeneros?.map((c) => (
          <option key={c.id}> {c.category} </option>
        ))}
      </select>
      <div>
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

      <div>
        {bookInput === 'todos' ? (
          <p />
        ) : allBooks.length > 0 ? (
          <Paginated data={allBooks} itemsPerPage={5} />
        ) : (
          <p>No hay libros con este género</p>
        )}
      </div>
    </div>
  )
}

export default FiltradoGenero
