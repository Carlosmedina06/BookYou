/* import { useState } from 'react'
import { useSelector } from 'react-redux' */

/* import { getSearchBook } from '../../redux/actions/index' */
/* import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'
import style2 from '../FiltradoGenero/filtradoGenero.module.css' */
import style from '../FiltradoAutor/filterAutor.module.css'
import CssGenerico from '../CssGenerico/CssGenerico.module.css'

function SearchByAutor({ /* authorInput, clearFilters, setBookInput, */ setAuthorInput }) {
  /*   const autor = useSelector((state) => state.autor)
  const [currentPage, setCurrentPage] = useState(1) */

  const handleInputChange = (e) => {
    setAuthorInput(e.target.value)
  }

  /*  const filterAuthor = autor.filter((a) =>
    a.author.toLowerCase().includes(authorInput.toLowerCase()),
  ) */

  return (
    <>
      <div>
        <div>
          <div style={{ position: 'absolute', top: '20px', left: '600px' }}>
            <input
              required
              className={CssGenerico.search}
              id="default-search"
              placeholder=" Autores"
              type="search"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* <div className={style.mover1}>
          <div className={style.mover}>
            {authorInput === '' ? (
              <p />
            ) : filterAuthor.length > 0 ? (
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
              <p className={style.p}>No tenemos ningún autor con ese nombre</p>
            )}
          </div>
        </div>

        <div className=" place-self-center">
          {authorInput === '' ? (
            <p />
          ) : (
            <div className={style.paginado}>
              <Pagination nextPage={nextPage} prevPage={prevPage} totalPages={currentPage + 1} />
            </div>
          )}
        </div> */}
      </div>
    </>
  )
}

export default SearchByAutor
