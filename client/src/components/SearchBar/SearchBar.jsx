import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchBook } from '../../redux/actions/index';
import Card from '../Card/Card';

function SearchBar() {
  const [bookInput, setBookInput] = useState('');
  const [message, setMessage] = useState('');
  const books = useSelector(state => state.books)
 console.log(books);
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
console.log(filteredResults);
  return (
    <form
      className="top-1/4 w-full my-3.5 m-auto grid col-span-12"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium	text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Libros, Textos, Artículos..."
          required
          onChange={handleInputChange}
        />
        <div>
          {filteredResults.length > 0 ? (
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
          ) : (
            <p>No tenemos ningún texto con ese nombre :C</p>
          )}
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
