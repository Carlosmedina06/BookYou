import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { getBooks, getCategory } from '../../redux/actions/index'

/* import NavBar from '../NavBar/NavBar' */
export const Home = () => {
  const dispatch = useDispatch()
  const allBooks = useSelector((state) => state.books)
  const allGeneros = useSelector((state) => state.category)

  console.log('Esto es Books:', allBooks)
  console.log('Esto es Category:', allGeneros)

  useEffect(() => {
    dispatch(getBooks())
    dispatch(getCategory())
  }, [dispatch])

  return (
    <div>
      {/* <NavBar /> */}
      <h1>This is Home</h1>
    </div>
  )
}
