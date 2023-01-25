import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { getBooks, getCategorys } from '../../redux/actions/index'
import FiltradoGenero from '../FiltradoGenero/filtradoGenero'
import OrdAlfabetico from '../OrderAlfab/orderAlfabetico'
import NavBar from '../NavBar/NavBar'
import Carousel from '../CarouselRecomendados/Carousel'
import CarouselPV from '../CarouselParaVos/Carousel'
import CarouselN from '../CarouselNuevos/Carousel'
import SearchBar from '../SearchBar/SearchBar'
import { useAuth } from '../../context/authContex'

export const Home = () => {
  const dispatch = useDispatch()
  const [showCarousels, setShowCarousels] = useState(true)
  const [showFilterGenero, setShowFilterGenero] = useState(true)

  const [showSearchFilter, setShowSearchFilter] = useState(true)
  const [books, setBooks] = useState(true)

  //----------------------------------------------------------------
  const [bookInput, setBookInput] = useState('')
  const [bookInputtodos, setBookInputtodos] = useState('todos')
  //----------------------------------------------------------------

  const clearFilters = () => {
    setBookInput('')
    setBookInputtodos('todos')
  }

  /*   const allBooks = useSelector((state) => state.books)
  const allGeneros = useSelector((state) => state.category) */

  useEffect(() => {
    dispatch(getBooks())
    dispatch(getCategorys())
  }, [dispatch])

  return (
    <div>
      <div style={{ position: 'relative', top: '-14px' }}>
        <NavBar />
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
        {showCarousels && showFilterGenero && (
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
