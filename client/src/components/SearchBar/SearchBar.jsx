import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSearchBook } from '../../redux/actions/index'
import { Paginated } from '../Paginated/paginated'
import Card from '../Card/Card'
import style from '../SearchBar/searchbar.module.css'

function SearchBar({ setShowCarousels }) {
  const [bookInput, setBookInput] = useState('')
  const [message, setMessage] = useState('')
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setBookInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('')
    if (!bookInput) {
      setMessage('Este campo no debe estar vacío')
    }
    dispatch(getSearchBook(bookInput))
    setBookInput('')
  }

  const filteredResults = books.filter((book) =>
    book.title.toLowerCase().includes(bookInput.toLowerCase()),
  )

  if (bookInput !== '') {
    setShowCarousels(false)
  } else if (bookInput === '') {
    setShowCarousels(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="default-search">Search</label>
      <div className={style.contenedor}>
        <input
          required
          className={style.input}
          id="default-search"
          placeholder="Search: Libros, Textos, Artículos..."
          type="search"
          onChange={handleInputChange}
        />
        <div className={style.cardConteiner}>
          {bookInput === '' ? (
            <p />
          ) : filteredResults.length > 0 ? (
            filteredResults.map((book) => (
              <Card
                key={book.id}
                autor={book.autor}
                comentarios={book.content}
                estado={book.subscription}
                id={book.id}
                img={book.img}
                name={book.title}
              />
            ))
          ) : (
            <p>No tenemos ningún texto con ese nombre :C</p>
          )}
        </div>
        <div>
          {bookInput === '' ? (
            <p />
          ) : filteredResults.length > 0 ? (
            <Paginated data={filteredResults} itemsPerPage={2} />
          ) : (
            <p>No tenemos ningún texto con ese nombre :C</p>
          )}
        </div>
      </div>
    </form>
  )
}

export default SearchBar
