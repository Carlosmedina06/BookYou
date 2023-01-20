import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { getBooks, getCategorys } from '../../redux/actions/index'
import FiltradoGenero from '../FiltradoGenero/filtradoGenero'
import OrdAlfabetico from '../OrderAlfab/orderAlfabetico'

import Carousel from '../CarouselRecomendados/Carousel'
import CarouselPV from '../CarouselParaVos/Carousel'
import CarouselN from '../CarouselNuevos/Carousel'

 import NavBar from '../NavBar/NavBar' 
import { Paginated } from '../Paginated/paginated'

//la variable data es hardcodeado para probar la paginacion y que la pagina no se rompa
//puedemn borrarla y pasarle la data de los libros 
const data = [
  {
    "id": 1,
    "title": "Post 1"
  },
  {
    "id": 2,
    "title": "Post 2"
  },
  {
    "id": 3,
    "title": "Post 3"
  }
]
export const Home = () => {
  const dispatch = useDispatch()
  /*   const allBooks = useSelector((state) => state.books)
  const allGeneros = useSelector((state) => state.category) */

  useEffect(() => {
    dispatch(getBooks())
    dispatch(getCategorys())
  }, [dispatch])

  return (
    <div className="  grid grid-cols-12">
    <div className=" grid col-span-3">
    <NavBar/>
    </div>
    <div className="grid bg-gray col-span-9 pt-10">
      
      
      <Carousel/>
      <CarouselPV/>
      <CarouselN/>
   
      
      <FiltradoGenero />
      <OrdAlfabetico />
    </div>
    </div>
  )
}
