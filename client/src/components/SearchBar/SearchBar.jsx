import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchBook } from '../../redux/actions/index';

function SearchBar() {
  const [bookInput, setBookInput] = useState('');
  const [message, setMessage] = useState('');

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
          onChange={e => handleInputChange(e)}
        />
        {message && <p>Este campo no debes estar vacio</p>}
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
