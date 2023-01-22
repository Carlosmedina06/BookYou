import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchBook } from '../../redux/actions/index';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination'
import style from './SearchBar.module.css'
import style2 from '../FiltradoGenero/filtradoGenero.module.css'

function SearchBar({setShowCarousels,bookInput, setBookInput,setBookInputtodos,clearFilters }) {
 
  const books = useSelector(state => state.books)
  const [book, setBook] = useState([])
  const dispatch = useDispatch();
  
  const [currentPage, setCurrentPage] = useState(1);
  

  //seteo


  
   //seteo
  

  const handleInputChange = e => {
    setBookInput(e.target.value);
    setBookInputtodos('todos');
    setCurrentPage(0);
  };

  const filteredResults = books.filter(book => book.title.toLowerCase().includes(bookInput.toLowerCase()))
  if( bookInput !== ''){
    setShowCarousels(false);
  }else if(bookInput === ''){
    setShowCarousels(true);
  }

  //data pagination-----------------------
  const totalPages = Math.ceil(filteredResults.length / 5)
  const filterBooks = () => {
    const filtered = filteredResults.slice(currentPage * 5, currentPage * 5 + 5)
    return filtered
  }

  //Pagina Anterior
  const prevPage = () => {
    if (currentPage >= 1) setCurrentPage(currentPage - 1)
  }
  //Pagina siguiente
  const nextPage = () => {
    if (currentPage < totalPages && filteredResults.length-5 > currentPage*5) {
        setCurrentPage(currentPage + 1)
    }
}
console.log(filteredResults.length);
  return (
    <>
    <div
      className="top-1/4 w-full my-3.5 m-auto grid col-span-12"
      
    >
      <div className={style.input}>
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
          className={style2.select} placeholder="Libros, Textos, Artículos..."
          required
          onChange={handleInputChange}
          />
          </div>
          
        <div className={style.mover1}>
         <div className={style.mover}>
          {bookInput === '' ? (
            <p></p>
          ) : filteredResults.length > 0 ? (
            filterBooks().map((book,i) => (
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
          ) 
          : (
            <p className={style.p}>No tenemos ningún texto con ese nombre :C</p>
          )}
        </div>
              </div>


        <div className=" place-self-center">
          {bookInput === '' ? (
            <p></p>
          ) :
          <div className={style.paginado}>
            <Pagination prevPage={prevPage} nextPage={nextPage} totalPages={currentPage+1} />
          </div>
}
        </div>
      </div>
    </div>
    </>
  );
}

export default SearchBar;
