import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { getBooks, orderAlf } from '../../redux/actions/index'
import style from '../OrderAlfab/orderAlf.module.css'

export const OrdAlfabetico = () => {
  const dispatch = useDispatch()

  /* const allBooks = useSelector((state) => state.books) */

  useEffect(() => {
    dispatch(getBooks)
  })

  /*   const [ordAlf, setOrdAlf] = useState('') */

  function handleSortBooks(e) {
    e.preventDefault()
    dispatch(orderAlf(e.target.value))
    /*   setOrdAlf(`Ordenando ${e.target.value}`) */
  }

  return (
    <div className={style.contenedor}>
      <select onChange={(e) => handleSortBooks(e)}>
        <option value="asc"> A-Z </option>
        <option value="desc"> Z-A </option>
      </select>
    </div>
  )
}

export default OrdAlfabetico
