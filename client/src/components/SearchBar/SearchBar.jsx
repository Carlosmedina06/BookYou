import CssGenerico from '../CssGenerico/CssGenerico.module.css'
/* import style from './SearchBar.module.css' */

function SearchBar({ setBookInput }) {
  //seteo

  //seteo

  const handleInputChange = (e) => {
    setBookInput(e.target.value)
  }

  /*   const filteredResults = books.filter((book) =>
    book.title.toLowerCase().includes(bookInput.toLowerCase()),
  ) */

  return (
    <>
      <div>
        <div>
          <div style={{ position: 'absolute', top: '20px', left: '300px', paddingRight: '300px' }}>
            <input
              required
              className={CssGenerico.search}
              id="default-search"
              placeholder="Libros, Textos, Artículos..."
              type="search"
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/*   <div className={style.mover1}>
          <div className={style.mover}>
            {bookInput === '' ? (
              <p />
            ) : filteredResults.length > 0 ? (
              filterBooks().map((book, i) => (
                <Card
                  key={i}
                  autor={book.autor}
                  comentarios={book.content}
                  estado={book.subscription}
                  id={book.id}
                  img={book.img}
                  name={book.title}
                />
              ))
            ) : (
              <p className={style.p}>No tenemos ningún texto con ese nombre</p>
            )}
          </div>
        </div> */}
      </div>
    </>
  )
}

export default SearchBar
