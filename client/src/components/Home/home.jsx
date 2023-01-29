import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

//import jwt_decode from 'jwt-decode'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import { getBooks, getCategorys, loginUser, getAutores } from '../../redux/actions/index'
import FiltradoGenero from '../FiltradoGenero/filtradoGenero'
import OrdAlfabetico from '../OrderAlfab/orderAlfabetico'
import NavBar from '../NavBar/NavBar'
import Carousel from '../Carouseles/CarouselRecomendados/Carousel'
import SearchBar from '../SearchBar/SearchBar'
import SearchByAutor from '../FiltradoAutor/filterAutor'
import Card from '../Card/Card'
/* import Pagination from '../Pagination/Pagination' */
import style from '../Home/home.module.css'

export const Home = () => {
  const dispatch = useDispatch()

  const [books, setBooks] = useState(true) /* actualizar estado libros orden alf */
  const [bookInput, setBookInput] = useState('') /* actualizar estado searchbar por libro*/
  const [authorInput, setAuthorInput] = useState('') /* actualizar estado searchbar por autor */
  const [bookInputtodos, setBookInputtodos] =
    useState('') /* actualizar estado genero 'value=todos' para serachbar por libro y autor*/
  const [filterLibros, setFilterLibros] = useState([])

  const [currentPage, setCurrentPage] = useState(0)
  const [countOne, setCountOne] = useState(1)
  const [countTwo, setCountTwo] = useState(1)

  const allBooks = useSelector((state) => state.books)

  const onChangePagination = (event, value) => {
    setCountOne(value)
    if (countTwo < value) {
      let count = value - countTwo

      while (count > 0) {
        next()
        count--
      }
    } else if (countTwo > value) {
      let count = countTwo - value

      while (count > 0) {
        prev()
        count--
      }
    }
    setCountTwo(value)
  }

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

  useEffect(() => {
    dispatch(getBooks())
    dispatch(getCategorys())
    dispatch(loginUser())
    dispatch(getAutores())
  }, [dispatch])

  //data pagination-----------------------
  /*   const totalPages = Math.ceil(allBooks.length / 8)
  const filterBooks = () => {
    const filtered = allBooks.slice(currentPage * 8, currentPage * 4 + 4)

    return filtered
  } */

  //Pagina Anterior
  const prev = () => {
    if (0 < currentPage) setCurrentPage(currentPage - 8)
  }
  //Pagina siguiente
  const next = () => {
    if (currentPage + 8 < allBooks.length) {
      setCurrentPage(currentPage + 8)
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
                    id={book.id}
                    autor={book.autor}
                    className={style.filterCard}
                    comentarios={book.content}
                    estado={book.subscription}
                    img={book.img}
                    name={book.title}
                  />
                ))
              : allBooks
                  .slice(currentPage, currentPage + 8)
                  .map((book) => (
                    <Card
                      key={book.id}
                      id={book.id}
                      autor={book.author}
                      className={style.cards}
                      comentarios={book.content}
                      estado={book.subscription}
                      img={book.img}
                      name={book.title}
                    />
                  ))}
          </div>
        </div>
        <div className={style.paginado}>
          <Stack spacing={2}>
            <Pagination
              className={style.pagination}
              color="primary"
              count={Math.ceil(allBooks.length / 8)}
              page={countOne}
              size="large"
              onChange={onChangePagination}
            />
          </Stack>
        </div>
        <div>
          <div style={{ position: 'absolute', left: '290px', top: '65rem' }}>
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
