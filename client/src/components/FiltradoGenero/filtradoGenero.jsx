import { useSelector } from 'react-redux'
import style from '../FiltradoGenero/filtradoGenero.module.css'
import CssGenerico from '../CssGenerico/CssGenerico.module.css'

export const FiltradoGenero = ({ setBookInputtodos,bookInputtodos }) => {
  const allGeneros = useSelector((state) => state.category)

  function handleFilterCategorys(e) {
    setBookInputtodos(e.target.value)
  }

  return (
    <div>
      <div style={{ position: 'absolute', top: '20px', left: '900px' }}>
        <select 
          className={CssGenerico.selectGen} 
          onChange={(e) => handleFilterCategorys(e)}
          value={bookInputtodos}
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
