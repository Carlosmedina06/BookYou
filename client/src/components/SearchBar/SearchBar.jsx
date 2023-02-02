import CssGenerico from '../CssGenerico/CssGenerico.module.css'

function SearchBar({ setBookInput, bookInput }) {
  const handleInputChange = (e) => {
    setBookInput(e.target.value)
  }

  return (
    <>
      <div>
        <div style={{ position: 'absolute', top: '20px', left: '300px', paddingRight: '300px' }}>
          <input
            required
            autoComplete="off"
            className={CssGenerico.search}
            id="default-search"
            placeholder="Libros, Textos, Artículos..."
            type="text"
            value={bookInput}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  )
}

export default SearchBar
