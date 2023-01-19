import { filterGeneros } from "../../redux/bookActions";

export const FiltradoGenero = () => {

  function handleFilterStatus(e) {
    dispatch(filterGeneros(e.target.value));
  }

  return(
    <div>
      <select onChange={(e) => handleFilterStatus(e)}>
        <option value="todos">Todos</option>
        <option value="creados">Creados</option>
      </select>
    </div>
  )
}

export default FiltradoGenero