import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

//import jwt_decode from 'jwt-decode'
import { getBooks, getCategorys, loginUser, getAutores } from '../../redux/actions/index'
import FiltradoGenero from '../FiltradoGenero/filtradoGenero'
import OrdAlfabetico from '../OrderAlfab/orderAlfabetico'
import NavBar from '../NavBar/NavBar'
import Carousel from '../Carouseles/CarouselRecomendados/Carousel'
/* import CarouselPV from '../Carouseles/CarouselParaVos/Carousel'
import CarouselN from '../Carouseles/CarouselNuevos/Carousel' */
import SearchBar from '../SearchBar/SearchBar'
import SearchByAutor from '../FiltradoAutor/filterAutor'
/* import Pagination from '../Pagination/Pagination' */
/* import style from '../Home/home.module.css' */

export const Home = () => {
  const dispatch = useDispatch()

  const [showCarousels, setShowCarousels] = useState(true) /* actualizar estado arousel cards */
  const [showFilterGenero, setShowFilterGenero] = useState(true) /* actualizar estado genero */
  const [showFilterAutor, setShowFilterAutor] = useState(true)
  const [books, setBooks] = useState(true) /* actualizar estado libros orden alf */
  const [bookInput, setBookInput] = useState('') /* actualizar estado searchbar por libro*/
  const [authorInput, setAuthorInput] = useState('') /* actualizar estado searchbar por autor */
  const [bookInputtodos, setBookInputtodos] =
    useState('todos') /* actualizar estado genero 'value=todos' para serachbar por libro y autor*/

  const clearFilters = () => {
    setBookInput('')
    setBookInputtodos('todos')
    setAuthorInput('')
  }

  useEffect(() => {
    dispatch(getBooks())
    dispatch(getCategorys())
    dispatch(loginUser())
    dispatch(getAutores())
  }, [dispatch])

  return (
    <div style={{ backgroundColor: 'blue' }}>
      <div style={{ position: 'absolute', top: '0px' }}>
        <NavBar />
      </div>

      <SearchBar
        bookInput={bookInput}
        clearFilters={clearFilters}
        setAuthorInput={setAuthorInput}
        setBookInput={setBookInput}
        setBookInputtodos={setBookInputtodos}
        setShowCarousels={setShowCarousels}
      />

      <div>
        <div>
          <SearchByAutor
            authorInput={authorInput}
            clearFilters={clearFilters}
            setAuthorInput={setAuthorInput}
            setBookInput={setBookInput}
            setBookInputtodos={setBookInputtodos}
            setShowFilterAutor={setShowFilterAutor}
          />
        </div>
        <div>
          <FiltradoGenero
            bookInput={bookInput}
            bookInputtodos={bookInputtodos}
            books={books}
            clearFilters={clearFilters}
            setAuthorInput={setAuthorInput}
            setBookInput={setBookInput}
            setBookInputtodos={setBookInputtodos}
            setBooks={setBooks}
            setShowFilterGenero={setShowFilterGenero}
            showFilterGenero={showFilterGenero}
          />
        </div>
        <div style={{ position: 'absolute', top: '130px', left: '30px' }}>
          <OrdAlfabetico books={books} setBooks={setBooks} />
        </div>
        {/*  <Pagination /> */}
        <div>
          {showCarousels && showFilterGenero && showFilterAutor && (
            <>
              <div style={{ position: 'absolute', left: '300px', top: '100px' }}>
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
                {/* <Card /> */}
                <Carousel />
              </div>
              {/* <div style={{ position: 'absolute', left: '300px', top: '500px' }}>
                <h3
                  style={{
                    color: '#010326',
                    position: 'absolute',
                    top: '-20px',
                    left: '20px',
                    fontSize: '30px',
                  }}
                >
                  Para Vos
                </h3>
                <CarouselPV />
              </div>
              <div style={{ position: 'absolute', left: '300px', top: '900px' }}>
                <h3
                  style={{
                    color: '#010326',
                    position: 'absolute',
                    top: '-20px',
                    left: '20px',
                    fontSize: '30px',
                  }}
                >
                  Nuevo
                </h3>
                <CarouselN />
              </div> */}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
