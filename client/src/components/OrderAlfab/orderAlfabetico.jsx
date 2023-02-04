import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { orderAlf } from '../../redux/actions/index'
import CssGenerico from '../CssGenerico/CssGenerico.module.css'

import style from './orderAlf.module.css'

export const OrdAlfabetico = ({ books, setBooks }) => {
  const dispatch = useDispatch()

  const [ordAlf, setOrdAlf] = useState()

  function handleSortBooks(e) {
    e.preventDefault()
    dispatch(orderAlf(e.target.value))

    setBooks(!books)
    setOrdAlf(`Ordenando ${e.target.value}`)
  }

  return (
    <div className={style.contenedor}>
      <select className={CssGenerico.selectAZ} onChange={(e) => handleSortBooks(e)}>
        <option className={style.roundedSelect} value="todos">
          {' '}
          Orden Alf{' '}
        </option>
        <option className={style.roundedSelect} value="asc">
          {' '}
          A-Z{' '}
        </option>
        <option className={style.roundedSelect} value="desc">
          {' '}
          Z-A{' '}
        </option>
      </select>
    </div>
  )
}

export default OrdAlfabetico
