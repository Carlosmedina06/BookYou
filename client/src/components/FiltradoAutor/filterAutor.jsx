import { useState } from 'react'
import { useSelector } from 'react-redux'

/* import { getSearchBook } from '../../redux/actions/index' */
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'
import style2 from '../FiltradoGenero/filtradoGenero.module.css'
import style from '../FiltradoAutor/filterAutor.module.css'

function SearchByAutor({ setShowFilterAutor, authorInput, setAuthorInput, setAuthorInputtodos }) {
  const autor = useSelector((state) => state.autor)

  console.log('soy autor', autor)

  const [currentPage, setCurrentPage] = useState(1)

  const handleInputChange = (e) => {
    setAuthorInput(e.target.value)
    setAuthorInputtodos('todos')
    setCurrentPage(0)
  }

  const filterAuthor = autor.filter((a) =>
    a.author.toLowerCase().includes(authorInput.toLowerCase()),
  )

  if (authorInput !== '') {
    setShowFilterAutor(false)
  } else if (authorInput === '') {
    setShowFilterAutor(true)
  }

  //data pagination-----------------------
  const totalPages = Math.ceil(filterAuthor.length / 5)
  const filterBooks = () => {
    const filtered = filterAuthor.slice(currentPage * 5, currentPage * 5 + 5)

    return filtered
  }

  //Pagina Anterior
  const prevPage = () => {
    if (currentPage >= 1) setCurrentPage(currentPage - 1)
  }
  //Pagina siguiente
  const nextPage = () => {
    if (currentPage < totalPages && filterAuthor.length - 5 > currentPage * 5) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <>
      <div className="top-1/4 w-full my-3.5 m-auto grid col-span-12">
        <div className={style.input}>
          <label
            className="mb-2 text-sm font-medium	text-gray-900 sr-only dark:text-white"
            htmlFor="default-search"
          >
            Search
          </label>
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
              className={style2.select}
              id="default-search"
              placeholder=" Autores"
              type="search"
              onChange={handleInputChange}
            />
          </div>

          <div className={style.mover1}>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchByAutor
