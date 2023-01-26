import { useState } from "react";
import {
  getBookById,
  getBookId,
  deleteBook,
  updateBook,
} from "../../../utils/Hooks/dashFunctions/bookFunctions";
import { useSelector } from "react-redux";

export const BookEdit = () => {
  const books = useSelector((state) => state.allBooks);

  const [input, setInput] = useState({
    title: "",
  });
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    const book = books.filter((el) => {
      return el.title.toLowerCase() === input.title.toLowerCase();
    });

    const bookId = book[0].id;
    //------ esta es la que me esta trayendo problemas -----

    const detailEntireBook = getBookById(bookId);

    console.log(detailEntireBook);
  };
  return (
    <div>
      <input
        name="title"
        value={input.title}
        onChange={(e) => handleChange(e)}
      />
      <button type="button" onClick={handleClick}>
        Buscar
      </button>
    </div>
  );
};
