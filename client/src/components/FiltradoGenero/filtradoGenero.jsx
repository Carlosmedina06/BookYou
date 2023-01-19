import { useDispatch, useSelector } from 'react-redux'

import { filterCategorys } from '../../redux/actions/index'

export const FiltradoGenero = () => {
  const dispatch = useDispatch()

  const allGeneros = useSelector((state) => state.category)

  function handleFilterCategorys(e) {
    dispatch(filterCategorys(e.target.value))
  }

  return (
    <div>
      <select onChange={(e) => handleFilterCategorys(e)}>
        <option value="todos"> Géneros </option>
        {allGeneros?.map((c) => (
          <option key={c.id}> {c.category} </option>
        ))}
      </select>
    </div>
  )
}

export default FiltradoGenero
