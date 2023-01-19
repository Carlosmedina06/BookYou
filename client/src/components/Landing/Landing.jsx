import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import { getBooks, getUsers } from '../../redux/actions'

export const Landing = () => {
  const users = useSelector((state) => state.users)

  const books = useSelector((state) => state.books)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
    dispatch(getBooks())
  }, [])

  //==== si no hay datos en db las dos lineas de abajo generan un loop complicado ======
  // if(users.length<1) dispatch(getUsers())
  // if(books.length<1) dispatch(getBooks())

  return (
    <div>
      <h1>Landing</h1>
      <Link to="/home">
        <button type="button" value="enter">
          Enter
        </button>
      </Link>
    </div>
  )
}
