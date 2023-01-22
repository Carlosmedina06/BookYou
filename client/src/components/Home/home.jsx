import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { getBooks, getCategorys } from '../../redux/actions/index'
import FiltradoGenero from '../FiltradoGenero/filtradoGenero'
import OrdAlfabetico from '../OrderAlfab/orderAlfabetico'
import NavBar from '../NavBar/NavBar'
import Carousel from '../CarouselRecomendados/Carousel'
import CarouselPV from '../CarouselParaVos/Carousel'
import CarouselN from '../CarouselNuevos/Carousel'
import SearchBar from '../SearchBar/SearchBar'

export const Home = () => {
  const dispatch = useDispatch()
  const [showCarousels, setShowCarousels] = useState(true)
  const [showFilterGenero, setShowFilterGenero] = useState(true)
  const [books, setBooks] = useState(true)
  /*   const allBooks = useSelector((state) => state.books)
  const allGeneros = useSelector((state) => state.category) */

  useEffect(() => {
    dispatch(getBooks())
    dispatch(getCategorys())
  }, [dispatch])

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <SearchBar setShowCarousels={setShowCarousels} />
      </div>
      <div>
        <FiltradoGenero
          books={books}
          setBooks={setBooks}
          setShowFilterGenero={setShowFilterGenero}
          showFilterGenero={showFilterGenero}
        />
      </div>
      <div>
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
