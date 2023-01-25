import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* import { getSearchBook } from '../../redux/actions/index' */
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'
import style2 from '../FiltradoGenero/filtradoGenero.module.css'

import style from './SearchBar.module.css'
import CssGenerico from '../CssGenerico/CssGenerico.module.css'

function SearchBar({ setShowCarousels, bookInput, setBookInput, setBookInputtodos, clearFilters }) {
  const books = useSelector((state) => state.books)
  /*   const [book, setBook] = useState([])
  const dispatch = useDispatch() */

  const [currentPage, setCurrentPage] = useState(1)

  //seteo

  //seteo

  const handleInputChange = (e) => {
    setBookInput(e.target.value)
    setBookInputtodos('todos')
    setCurrentPage(0)
  }

  const filteredResults = books.filter((book) =>
    book.title.toLowerCase().includes(bookInput.toLowerCase()),
  )

  if (bookInput !== '') {
    setShowCarousels(false)
  } else if (bookInput === '') {
    setShowCarousels(true)
  }

  //data pagination-----------------------
  const totalPages = Math.ceil(filteredResults.length / 5)
  const filterBooks = () => {
    const filtered = filteredResults.slice(currentPage * 5, currentPage * 5 + 5)

    return filtered
  }

  //Pagina Anterior
  const prevPage = () => {
    if (currentPage >= 1) setCurrentPage(currentPage - 1)
  }
  //Pagina siguiente
  const nextPage = () => {
    if (currentPage < totalPages && filteredResults.length - 5 > currentPage * 5) {
      setCurrentPage(currentPage + 1)
    }
  }

  /*   console.log(filteredResults.length) */

  return (
    <>
      <div >
        <div className={style.input}>
          <div>
            <div className={style.svgConteiner}>
              <svg
                aria-hidden="true"
                className={style.svg}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <input
              required
              className={CssGenerico.search}
              id="default-search"
              placeholder="Libros, Textos, Artículos..."
              type="search"
              onChange={handleInputChange}
            />
          </div>

          <div className={style.mover1}>
            <div className={style.mover}>
              {bookInput === '' ? (
                <p />
              ) : filteredResults.length > 0 ? (
                filterBooks().map((book, i) => (
                  <Card
                    key={i}
                    autor={book.autor}
                    comentarios={book.content}
                    estado={book.subscription}
                    id={book.id}
                    img={book.img}
                    name={book.title}
                  />
                ))
              ) : (
                <p className={style.p}>No tenemos ningún texto con ese nombre</p>
              )}
            </div>
          </div>

          <div className=" place-self-center">
            {bookInput === '' ? (
              <p />
            ) : (
              <div className={style.paginado}>
                <Pagination nextPage={nextPage} prevPage={prevPage} totalPages={currentPage + 1} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar
