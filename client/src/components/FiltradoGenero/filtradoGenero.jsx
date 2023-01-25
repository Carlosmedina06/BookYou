import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { filterCategorys } from '../../redux/actions/index'
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'

import style from '../FiltradoGenero/filtradoGenero.module.css'
import CssGenerico from '../CssGenerico/CssGenerico.module.css'

export const FiltradoGenero = ({
  setShowFilterGenero,
  setBooks,
  books,
  bookInputtodos,
  setBookInputtodos,
  setBookInput,
  bookInput,
  clearFilters,
}) => {
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(0)
  const [book, setBook] = useState([])

  const allGeneros = useSelector((state) => state.category)

  let allBooks = useSelector((state) => state.books)
  /*  const [books, setBooks] = useState(useSelector((state) => state.books)) */

  //seteo

  //seteo

  function handleFilterCategorys(e) {
    dispatch(filterCategorys(e.target.value))
    setBookInputtodos(e.target.value)
    setBooks(!books)
    setBookInput('')
  }
  if (bookInputtodos !== 'todos') {
    setShowFilterGenero(false)
  } else if (bookInputtodos === 'todos') {
    setShowFilterGenero(true)
  }

  //data pagination-----------------------
  const totalPages = Math.ceil(allBooks.length / 5)
  const filterBooks = () => {
    const filtered = allBooks.slice(currentPage * 5, currentPage * 5 + 5)

    return filtered
  }

  //Pagina Anterior
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1)
  }
  //Pagina siguiente
  const nextPage = () => {
    if (currentPage < totalPages && allBooks.length - 5 > currentPage * 5) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className={style.contenedor}>
      <select className={CssGenerico.selectGen} onChange={(e) => handleFilterCategorys(e)}>
        <option className={style.titulo} value="todos">
          {' '}
          Géneros{' '}
        </option>
        {/*         <option className={style.titulo} value="todos">
          {' '}
          Por defecto{' '}
        </option> */}
        {allGeneros?.map((c) => (
          <option key={c.id}> {c.category} </option>
        ))}
      </select>

      <div className={style.mover1}>
        <div className={style.mover}>
          {bookInputtodos === 'todos' ? (
            <p />
          ) : (
            filterBooks().map((book) => (
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

      <div>
        {bookInputtodos === 'todos' ? (
          <p />
        ) : allBooks.length > 0 ? (
          <div className={style.paginado}>
            <Pagination nextPage={nextPage} prevPage={prevPage} totalPages={currentPage + 1} />
          </div>
        ) : (
          <p className={style.p}>No hay libros con este género</p>
        )}
      </div>
    </div>
  )
}

export default FiltradoGenero
