import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'

import CarouselFreeBooks from '../Carouseles/CarouselFreeBooks/CarouselFreeBooks'
import CarouselBooksPremium from '../Carouseles/CarouselBooksPremium/CarouselBooksPremium'
import {
  getBooks,
  getBooksCarousel,
  getCategorys,
  getAutores,
  getUsers,
  getFreeBooks,
  getPremiumBooks,
} from '../../redux/actions/index'
import FiltradoGenero from '../FiltradoGenero/filtradoGenero'
import OrdAlfabetico from '../OrderAlfab/orderAlfabetico'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
import SearchByAutor from '../FiltradoAutor/filterAutor'
import Card from '../Card/Card'

/* import Pagination from '../Pagination/Pagination' */
import style from '../Home/home.module.css'
import Bot from '../chatbot/ChatBot'
import CarouselComentados from '../Carouseles/CarouselComments/Carousel'

export const Home = () => {
  const dispatch = useDispatch()

  const [books, setBooks] = useState(true) /* actualizar estado libros orden alf */
  const [bookInput, setBookInput] = useState('') /* actualizar estado searchbar por libro*/
  const [authorInput, setAuthorInput] = useState('') /* actualizar estado searchbar por autor */
  const [bookInputtodos, setBookInputtodos] =
    useState('') /* actualizar estado genero 'value=todos' para serachbar por libro y autor*/
  const [filterLibros, setFilterLibros] = useState([])

  const [didMount111, setDidMount] = useState(false)

  const allBooks = useSelector((state) => state.books)
  const booksOpen = useSelector((state) => state.booksFree)
  const booksPaid = useSelector((state) => state.booksPremium)

  /* ----------Paginacion------------- */

  const [currentPage, setCurrentPage] = useState(0)
  const [countOne, setCountOne] = useState(1)
  const [countTwo, setCountTwo] = useState(1)

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

  /* ----------Condicional filtrado libros------------- */
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
        } else if (bookInputtodos.length > 1) {
          return books
        }
      }),
    )
  }, [bookInputtodos, authorInput, bookInput, allBooks, books])

  useEffect(() => {
    dispatch(getBooks())
    dispatch(getCategorys())
    dispatch(getAutores())
    dispatch(getUsers())
    dispatch(getFreeBooks())
    dispatch(getPremiumBooks())
    dispatch(getBooksCarousel())
  }, [dispatch])

  //----------------------localStorage--------------------------
  useEffect(() => {
    const savedBookInput = localStorage.getItem('bookInput')
    const savedAuthorInput = localStorage.getItem('authorInput')
    const savedBookInputTodos = localStorage.getItem('bookInputtodos')

    if (savedBookInput) {
      setBookInput(savedBookInput)
    }
    if (savedAuthorInput) {
      setAuthorInput(savedAuthorInput)
    }
    if (savedBookInputTodos) {
      setBookInputtodos(savedBookInputTodos)
    }
    setDidMount(true)
    localStorage.setItem('bookInput', bookInput)
    localStorage.setItem('authorInput', authorInput)
    localStorage.setItem('bookInputtodos', bookInputtodos)
  }, [didMount111])

  useEffect(() => {
    if (didMount111) {
      localStorage.setItem('bookInput', bookInput)
      localStorage.setItem('authorInput', authorInput)
      localStorage.setItem('bookInputtodos', bookInputtodos)
    }
  }, [bookInput, authorInput, bookInputtodos])
  //----------------------localStorage--------------------------

  const clearStates = () => {
    setBooks(true)
    setBookInput('')
    setAuthorInput('')
    setBookInputtodos('')
  }

  return (
    <div style={{ backgroundColor: 'blue' }}>
      <div style={{ position: 'absolute', top: '0px' }}>
        <NavBar />
      </div>

      <div style={{ position: 'absolute', top: '20px', left: '85%' }}>
        <button className={style.boton} onClick={clearStates}>
          <FontAwesomeIcon icon={faRefresh} />
        </button>
      </div>

      <SearchBar bookInput={bookInput} setBookInput={setBookInput} />

      <div>
        <div>
          <SearchByAutor authorInput={authorInput} setAuthorInput={setAuthorInput} />
        </div>
        <div>
          <FiltradoGenero
            bookInputtodos={bookInputtodos}
            setBookInputtodos={setBookInputtodos}
            setCountOne={setCountOne}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div style={{ position: 'absolute', top: '130px', left: '-70px' }}>
          <OrdAlfabetico books={books} setBooks={setBooks} />
        </div>
        <Bot />
        <div>
          {(bookInput.length > 0 && filterLibros.length === 0) ||
            (bookInputtodos.length > 0 && filterLibros.length === 0) ||
            (authorInput.length > 0 && filterLibros.length === 0) ? (
            <p className={style.p}>No se encontró ningún libro.</p>
          ) : (
            <>
              <div className={style.mover1}>
                <div className={style.mover}>
                  {filterLibros.length > 0
                    ? filterLibros
                      .slice(currentPage, currentPage + 8)
                      .map((book) => (
                        <Card
                          key={book.id}
                          autor={book.author}
                          className={style.filterCard}
                          comentarios={book.content}
                          estado={book.subscription}
                          id={book.id}
                          img={book.img}
                          name={book.title}
                        />
                      ))
                    : allBooks
                      .slice(currentPage, currentPage + 8)
                      .map((book) => (
                        <Card
                          key={book.id}
                          autor={book.author}
                          className={style.cards}
                          comentarios={book.content}
                          estado={book.subscription}
                          id={book.id}
                          img={book.img}
                          name={book.title}
                        />
                      ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className={style.paginado}>
        <Stack spacing={2}>
          <Pagination
            className={style.pagination}
            count={Math.ceil(
              filterLibros.length === 0 ? allBooks.length / 8 : filterLibros.length / 8,
            )}
            page={countOne}
            size="large"
            onChange={onChangePagination}
          />
        </Stack>
      </div>
      <div />
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
            Los más populares
          </h3>
          <CarouselComentados />
        </div>

        <div style={{ position: 'absolute', left: '290px', top: '95rem' }}>
          <h3
            style={{
              color: '#010326',
              position: 'absolute',
              top: '-20px',
              left: '20px',
              fontSize: '30px',
            }}
          >
            Libros Gratuitos
          </h3>
          <CarouselFreeBooks booksOpen={booksOpen} />
        </div>
        <div style={{ position: 'absolute', left: '290px', top: '125rem' }}>
          <h3
            style={{
              color: '#010326',
              position: 'absolute',
              top: '-20px',
              left: '20px',
              fontSize: '30px',
            }}
          >
            Libros Premium
          </h3>
          <CarouselBooksPremium booksPaid={booksPaid} />
        </div>
      </div>
    </div>
  )
}
