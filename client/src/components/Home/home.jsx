import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { getBooks, getCategorys, getAutores } from '../../redux/actions/index'
import FiltradoGenero from '../FiltradoGenero/filtradoGenero'
import OrdAlfabetico from '../OrderAlfab/orderAlfabetico'
import NavBar from '../NavBar/NavBar'
import Carousel from '../CarouselRecomendados/Carousel'
import CarouselPV from '../CarouselParaVos/Carousel'
import CarouselN from '../CarouselNuevos/Carousel'
import SearchBar from '../SearchBar/SearchBar'
import SearchByAutor from '../FiltradoAutor/filterAutor'
import Login from '../Login/Login'

export const Home = () => {
  const dispatch = useDispatch()

  const [showCarousels, setShowCarousels] = useState(true) /* cactualizar estado arousel cards */
  const [showFilterGenero, setShowFilterGenero] = useState(true) /* actualizar estado genero */
  const [showFilterAutor, setShowFilterAutor] = useState(true)
  const [books, setBooks] = useState(true) /* actualizar estado libros orden alf */

  //----------------------------------------------------------------

  const [bookInput, setBookInput] = useState('') /* actualizar estado searchbar por libro*/
  const [authorInput, setAuthorInput] = useState('') /* actualizar estado searchbar por autor */
  const [bookInputtodos, setBookInputtodos] =
    useState('todos') /* actualizar estado genero 'value=todos' para serachbar por libro y autor*/
  const [authorInputtodos, setAuthorInputtodos] = useState('todos')

  //----------------------------------------------------------------

  const clearFilters = () => {
    setBookInput('')
    setBookInputtodos('todos')
    setAuthorInput('')
    setAuthorInputtodos('todos')
    /* setCurrentPage(1) */
  }

  /*   const allBooks = useSelector((state) => state.books)
  const allGeneros = useSelector((state) => state.category) */

  useEffect(() => {
    dispatch(getBooks())
    dispatch(getCategorys())
    dispatch(getAutores())
  }, [dispatch])

  return (
    <div>
      <div style={{ position: 'relative', top: '-14px' }}>
        <NavBar />
      </div>
      <div>
        <Login />
      </div>
      <div>
        <SearchBar
          bookInput={bookInput}
          clearFilters={clearFilters}
          setBookInput={setBookInput}
          setBookInputtodos={setBookInputtodos}
          setShowCarousels={setShowCarousels}
        />
      </div>
      <div>
        <SearchByAutor
          authorInput={authorInput}
          clearFilters={clearFilters}
          setAuthorInput={setAuthorInput}
          setAuthorInputtodos={setAuthorInputtodos}
          setShowFilterAutor={setShowFilterAutor}
        />
      </div>
      <div style={{ position: 'absolute', top: '52px', left: '00px' }}>
        <FiltradoGenero
          bookInput={bookInput}
          bookInputtodos={bookInputtodos}
          books={books}
          clearFilters={clearFilters}
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
      <div>
        {showCarousels && showFilterGenero && showFilterAutor && (
          <>
            <Carousel />
            <CarouselPV />
            <CarouselN />
          </>
        )}
      </div>
    </div>
  )
}
