import style from '../FiltradoAutor/filterAutor.module.css'
import CssGenerico from '../CssGenerico/CssGenerico.module.css'

function SearchByAutor({ setAuthorInput, authorInput }) {
  const handleInputChange = (e) => {
    setAuthorInput(e.target.value)
  }

  return (
    <>
      <div>
        <div>
          <div style={{ position: 'absolute', top: '20px', left: '570px' }}>
            <input
              required
              autoComplete="off"
              className={CssGenerico.search}
              id="default-search"
              placeholder=" Autores"
              type="text"
              value={authorInput}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchByAutor
