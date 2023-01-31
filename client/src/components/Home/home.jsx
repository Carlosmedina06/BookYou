import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

//import jwt_decode from 'jwt-decode'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import { getBooks, getCategorys, getAutores, getUsers } from '../../redux/actions/index'
import FiltradoGenero from '../FiltradoGenero/filtradoGenero'
import OrdAlfabetico from '../OrderAlfab/orderAlfabetico'
import NavBar from '../NavBar/NavBar'
import Carousel from '../Carouseles/CarouselRecomendados/Carousel'
import SearchBar from '../SearchBar/SearchBar'
import SearchByAutor from '../FiltradoAutor/filterAutor'
import Card from '../Card/Card'
/* import Pagination from '../Pagination/Pagination' */
import style from '../Home/home.module.css'
import CssGenerico from '../CssGenerico/CssGenerico.module.css'

export const Home = () => {
  const dispatch = useDispatch()
  const allGeneros = useSelector((state) => state.category)

  const [books, setBooks] = useState(true) /* actualizar estado libros orden alf */
  const [bookInput, setBookInput] = useState('') /* actualizar estado searchbar por libro*/
  const [authorInput, setAuthorInput] = useState('') /* actualizar estado searchbar por autor */
  const [bookInputtodos, setBookInputtodos] =useState('') /* actualizar estado genero 'value=todos' para serachbar por libro y autor*/
  const [filterLibros, setFilterLibros] = useState([])

  /* ----------Paginacion------------- */

  const [currentPage, setCurrentPage] = useState(0)
  const [countOne, setCountOne] = useState(1)
  const [countTwo, setCountTwo] = useState(1)

  const allBooks = useSelector((state) => state.books)
  const [orderedBooks, setOrderedBooks] = useState(allBooks)

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
    dispatch(getAutores())
    dispatch(getUsers())
  }, [dispatch])
   
   
  const prev = () => {
    if (0 < currentPage) setCurrentPage(currentPage - 8)
  }
  //Pagina siguiente
  const next = () => {
    if (currentPage + 8 < allBooks.length) {
      setCurrentPage(currentPage + 8)
    }
  }


  const clearStates = () => {
    setBooks(true);
    setBookInput('');
    setAuthorInput('');
    setBookInputtodos('');
  }

  const handleInputChange = (e) => {
    setBookInput(e.target.value)
  }
  return (
    <div >
      <div style={{ position: 'absolute', top: '0px' }}>
        <NavBar />
      </div>
      <div style={{ position:'absolute',top: '90px', right: '45px' }}>
        <button className={style.boton}  onClick={clearStates}>Lmpiar</button>
      </div>
{/* input busqueda---------------------------------------------------------- */}
      <div>
          <div style={{ position: 'absolute', top: '20px', left: '300px', paddingRight: '300px' }}>
            <input
              required
              className={CssGenerico.search}
              id="default-search"
              placeholder="Libros, Textos, Artículos..."
              type="text"
              value={bookInput}
              onChange={(e) => setBookInput(e.target.value)}
            />
          </div>
        </div>
{/* input busqueda---------------------------------------------------------- */}
      <div>
{/* input busqueda Autor---------------------------------------------------- */}
      <div>
        <div style={{ position: 'absolute', top: '20px', left: '600px' }}>
            <input
              required
              className={CssGenerico.search}
              id="default-search"
              placeholder="Libros, Textos, Artículos..."
              type="text"
              value={authorInput}
              onChange={(e) => setAuthorInput(e.target.value)}
            />
          </div>
        </div>
{/* input busqueda Autor---------------------------------------------------- */}
        
{/* input Filtro Genero----------------------------------------------------- */}
      <div style={{ position: 'absolute', top: '20px', left: '900px' }}>
        <select
          className={CssGenerico.selectGen}
          value={bookInputtodos}
          onChange={(e) => setBookInputtodos(e.target.value)}
        >
        <option className={style.titulo} value="">
          Géneros
        </option>
        {allGeneros?.map((c) => (
          <option key={c.id}>{c.category}</option>
        ))}
      </select>
      </div>
{/* input Filtro Genero----------------------------------------------------- */}
        <div style={{ position: 'absolute', top: '130px', right: '45px' }}>
          <OrdAlfabetico 
          books={allBooks} 
          orderedBooks={orderedBooks} 
          setOrderedBooks = {setOrderedBooks}/>
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
      </div>
      <div className={style.paginado}>
        <Stack spacing={2}>
          <Pagination
            className={style.pagination}
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
  )
}
