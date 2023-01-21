import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchBook } from '../../../redux/actions/index';
import { Paginated } from '../paginated';
import Card from '../../Card/Card';

function SearchBar({ setShowCarousels }) {
  const [bookInput, setBookInput] = useState('');
  const [message, setMessage] = useState('');
  const books = useSelector(state => state.books)
  const dispatch = useDispatch();

  const handleInputChange = e => {
    setBookInput(e.target.value);
    console.log(bookInput);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMessage('');

    if (!bookInput) {
      setMessage('Este campo no debe estar vacío');
    }

    dispatch(getSearchBook(bookInput));

    setBookInput('');
  };

  const filteredResults = books.filter(book => book.title.toLowerCase().includes(bookInput.toLowerCase()))
  if (bookInput !== '') {
    setShowCarousels(false);
  } else if (bookInput === '') {
    setShowCarousels(true);
  }

  return (
    <form

      onSubmit={handleSubmit}
    >
      <label
        htmlFor="default-search"

      >
        Search
      </label>
      <div >
        <div >
          <svg
            aria-hidden="true"

            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          placeholder="Libros, Textos, Artículos..."
          required
          onChange={handleInputChange}
        />
        <div>
          {bookInput === '' ? (
            <p></p>
          ) : filteredResults.length > 0 ? (
            filteredResults.map(book => (
              <Card
                autor={book.autor}
                comentarios={book.content}
                estado={book.subscription}
                id={book.id}
                img={book.img}
                name={book.title}
              />
            ))
          )
            : (
              <p>No tenemos ningún texto con ese nombre :C</p>
            )}
        </div>


        <div >
          {bookInput === '' ? (
            <p></p>
          ) : filteredResults.length > 0 ? (
            <Paginated data={filteredResults} itemsPerPage={2} />
          ) : (
            <p>No tenemos ningún texto con ese nombre :C</p>
          )}
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
