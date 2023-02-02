import style from '../FiltradoAutor/filterAutor.module.css'
import CssGenerico from '../CssGenerico/CssGenerico.module.css'

function SearchByAutor({ setAuthorInput }) {
  const handleInputChange = (e) => {
    setAuthorInput(e.target.value)
  }

  return (
    <>
      <div>
        <div>
          <div className={style.svgConteiner}>
            <svg
              aria-hidden="true"
              className={style.svg}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div style={{ position: 'absolute', top: '20px', left: '600px' }}>
            <input
              required
              autoComplete="off"
              className={CssGenerico.search}
              id="default-search"
              placeholder=" Autores"
              type="search"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchByAutor
