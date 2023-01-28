import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

//import jwt_decode from 'jwt-decode'
import { getBooks, getCategorys, loginUser, getAutores } from '../../redux/actions/index'
import FiltradoGenero from '../FiltradoGenero/filtradoGenero'
import OrdAlfabetico from '../OrderAlfab/orderAlfabetico'
import NavBar from '../NavBar/NavBar'
import Carousel from '../Carouseles/CarouselRecomendados/Carousel'
import SearchBar from '../SearchBar/SearchBar'
import SearchByAutor from '../FiltradoAutor/filterAutor'
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'
import style from '../Home/home.module.css'

export const Home = () => {
  const dispatch = useDispatch()

  const [books, setBooks] = useState(true) /* actualizar estado libros orden alf */
  const [bookInput, setBookInput] = useState('') /* actualizar estado searchbar por libro*/
  const [authorInput, setAuthorInput] = useState('') /* actualizar estado searchbar por autor */
  const [bookInputtodos, setBookInputtodos] =
    useState('') /* actualizar estado genero 'value=todos' para serachbar por libro y autor*/
  const [currentPage, setCurrentPage] = useState(0)
  const [filterLibros, setFilterLibros] = useState([])

  const allBooks = useSelector((state) => state.books)
  const allCateg = useSelector((state) => state.category)
  const allAuthor = useSelector((state) => state.autor)

  useEffect(() => {
    setFilterLibros(
      allBooks.filter((b) => {
        if (bookInput.length > 0 && authorInput.length > 0 && bookInputtodos.length > 0) {
          return (
            b.title.toLowerCase().includes(bookInput.toLowerCase()) &&
            b.author.toLowerCase().includes(authorInput.toLowerCase()) &&
            b.category.toLowerCase().includes(bookInputtodos.toLowerCase())
          )
        } else if (bookInput.length > 0 && authorInput.length > 0) {
          return (
            b.title.toLowerCase().includes(bookInput.toLowerCase()) &&
            b.author.toLowerCase().includes(authorInput.toLowerCase())
          )
        } else if (bookInput.length > 0 && bookInputtodos.length > 0) {
          return (
            b.title.toLowerCase().includes(bookInput.toLowerCase()) &&
            b.category.toLowerCase().includes(bookInputtodos.toLowerCase())
          )
        } else if (authorInput.length > 0 && bookInputtodos.length > 0) {
          return (
            b.author.toLowerCase().includes(authorInput.toLowerCase()) &&
            b.category.toLowerCase().includes(bookInputtodos.toLowerCase())
          )
        } else if (bookInput.length > 0) {
          return b.title.toLowerCase().includes(bookInput.toLowerCase())
        } else if (authorInput.length > 0) {
          return b.author.toLowerCase().includes(authorInput.toLowerCase())
        } else if (bookInputtodos.length > 0) {
          return b.category.toLowerCase().includes(bookInputtodos.toLowerCase())
        }
      }),
    )
  }, [bookInputtodos, authorInput, bookInput, allBooks])

  /* ---filter books------ */
  /*   allBooks = allBooks.filter((book) => book.title.toLowerCase().includes(bookInput.toLowerCase()))
  console.log('soy allbooks:', allBooks) */

  /* ---filter author----- */
  /*   const filterAuthor = autor.filter((a) =>
    a.author.toLowerCase().includes(authorInput.toLowerCase()),
  ) */

  /* ---filter categ---- */
  /*   let allCateg = state.allBooks
  let categFilter =
    action.payload === 'todos'
      ? allCateg
      : allCateg.filter((c) => c.category?.includes(action.payload)) */

  useEffect(() => {
    dispatch(getBooks())
    dispatch(getCategorys())
    dispatch(loginUser())
    dispatch(getAutores())
  }, [dispatch])

  //data pagination-----------------------
  const totalPages = Math.ceil(allBooks.length / 5)
  const filterBooks = () => {
    const filtered = allBooks.slice(currentPage * 5, currentPage * 5 + 5)

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

  return (
    <div style={{ backgroundColor: 'blue' }}>
      <div style={{ position: 'absolute', top: '0px' }}>
        <NavBar />
      </div>

      <SearchBar
        bookInput={bookInput}
        setAuthorInput={setAuthorInput}
        setBookInput={setBookInput}
        setBookInputtodos={setBookInputtodos}
      />

      <div>
        <div>
          <SearchByAutor
            authorInput={authorInput}
            setAuthorInput={setAuthorInput}
            setBookInput={setBookInput}
            setBookInputtodos={setBookInputtodos}
          />
        </div>
        <div>
          <FiltradoGenero
            bookInput={bookInput}
            bookInputtodos={bookInputtodos}
            books={books}
            setAuthorInput={setAuthorInput}
            setBookInput={setBookInput}
            setBookInputtodos={setBookInputtodos}
            setBooks={setBooks}
          />
        </div>
        <div style={{ position: 'absolute', top: '130px', left: '30px' }}>
          <OrdAlfabetico books={books} setBooks={setBooks} />
        </div>

        <div>
          {(bookInput.length > 0 && filterLibros.length === 0) ||
            (bookInputtodos.length > 0 && filterLibros.length === 0) ||
            (authorInput.length > 0 && filterLibros.length === 0) ? (
            <p className={style.p}>No se encontro ningun libro</p>
          ) : (
            <p />
          )}
        </div>

        <div className={style.mover1}>
          <div className={style.mover}>
            {filterLibros.length > 0
              ? filterLibros.map((book) => (
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
              : allBooks.map((book) => (
                <Card
                  key={book.id}
                  autor={book.autor}
                  comentarios={book.content}
                  estado={book.subscription}
                  id={book.id}
                  img={book.img}
                  name={book.title}
                />
              ))}
          </div>
        </div>
        <div className={style.paginado}>
          <Pagination nextPage={nextPage} prevPage={prevPage} totalPages={currentPage + 1} />
        </div>
        <div>
          <div style={{ position: 'absolute', left: '300px', top: '700px' }}>
            <h3
              style={{
                color: '#010326',
                position: 'absolute',
                top: '-20px',
                left: '20px',
                fontSize: '30px',
              }}
            >
              Recomendado
            </h3>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  )
}
