import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { getBooks, getCategorys } from '../../redux/actions/index'
import FiltradoGenero from '../FiltradoGenero/filtradoGenero'

 import NavBar from '../NavBar/NavBar' 
import { Paginated } from '../Paginated/paginated'
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
  const allBooks = useSelector((state) => state.books)
  const allGeneros = useSelector((state) => state.category)

  console.log('Esto es Books:', allBooks)
  console.log('Esto es Category:', allGeneros)

  useEffect(() => {
    dispatch(getBooks())
    dispatch(getCategorys())
  }, [dispatch])

  return (
    <div className="grid grid-cols-12">
    <div className=" grid col-span-3">
    <NavBar/>
    </div>
    <div className="grid bg-gray col-span-9 pt-10">
      
      <h1>This is Home</h1>
   
      < div className=' place-self-center'>
      <Paginated data={data} itemsPerPage={2}/>
      </div>
      <FiltradoGenero />
    </div>
    </div>
  )
}
