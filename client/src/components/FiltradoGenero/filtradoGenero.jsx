import { useSelector } from 'react-redux'

import style from '../FiltradoGenero/filtradoGenero.module.css'
import CssGenerico from '../CssGenerico/CssGenerico.module.css'

export const FiltradoGenero = ({
  bookInputtodos,
  setBookInputtodos,
  setCurrentPage,
  setCountOne,
}) => {
  const allGeneros = useSelector((state) => state.category)

  function handleFilterCategorys(e) {
    setBookInputtodos(e.target.value)
    setCurrentPage(0)
    setCountOne(1)
  }

  return (
    <div>
      <div style={{ position: 'absolute', top: '20px', left: '840px' }}>
        <select
          className={CssGenerico.selectGen}
          value={bookInputtodos}
          onChange={(e) => handleFilterCategorys(e)}
        >
          <option className={style.titulo} value="">
            {' '}
            Géneros{' '}
          </option>

          {allGeneros?.map((c) => (
            <option key={c.id}> {c.category} </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FiltradoGenero
