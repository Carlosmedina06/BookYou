import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* import { getSearchBook } from '../../redux/actions/index' */
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'
import style2 from '../FiltradoGenero/filtradoGenero.module.css'

import style from './SearchBar.module.css'
import CssGenerico from '../CssGenerico/CssGenerico.module.css'

function SearchBar({ 
  bookInput, 
  clearFilters,  
  setBookInput,
  setAuthorInput, 
  setBookInputtodos,
  setShowCarousels
}) {
  const books = useSelector((state) => state.books)
  /*   const [book, setBook] = useState([])
  const dispatch = useDispatch() */

  const [currentPage, setCurrentPage] = useState(1)

  //seteo

  //seteo

  const handleInputChange = (e) => {
    setBookInput(e.target.value)
    setBookInputtodos('todos')
    setAuthorInput('')
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
        
          <div >
            <div style={{ position: 'absolute', top: '20px', left: '300px', paddingRight: "300px" }}>
            <input
              required
              className={CssGenerico.search}
              id="default-search"
              placeholder="Libros, Textos, Artículos..."
              type="search"
              onChange={handleInputChange}
              />
              </div>
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
    </>
  )
}

export default SearchBar
