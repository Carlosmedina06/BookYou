import style from '../FiltradoAutor/filterAutor.module.css'
import CssGenerico from '../CssGenerico/CssGenerico.module.css'

function SearchByAutor({ setAuthorInput,authorInput }) {

  const handleInputChange = (e) => {
    setAuthorInput(e.target.value)
  }

  return (
    <>
      <div>
        <div style={{ position: 'absolute', top: '20px', left: '600px' }}>
          <input
            required
            className={CssGenerico.search}
            id="default-search"
            placeholder=" Autores"
            type="text"
            value={authorInput}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  )
}

export default SearchByAutor
