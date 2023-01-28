import axios from 'axios'
import { useState } from "react";
import { useSelector } from "react-redux";
import style from './BookEdit.module.css'

export const BookEdit = () => {
  const books = useSelector((state) => state.allBooks);
  const categories = useSelector((state) => state.category);

  const [input, setInput] = useState({
    search: "",
  });
  const handleSearch = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  
  const [editedBook, setEditedBook] = useState({
    title: "",
    description: "",
    author: "",
    category: "",
    subscription: "",
    id: "",
  });
  const handleClickSearch = () => {
    const book = books.filter((el) => {
      return el.title.toLowerCase() === input.search.toLowerCase();
    });
    setEditedBook({
      title: book[0].title,
      description: book[0].description,
      author: book[0].author,
      category: book[0].category,
      subscription: book[0].subscription,
      id: book[0].id,
    });
  };

  const handleChange = (e) => {
    setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
  };
  const handleDelete = async (id) => {
    const info = axios.delete(
      "http://localhost:3001/book/delete/" + editedBook.id
    );
    const response = info.data;
    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();

    formData.append("title", editedBook.title);
    formData.append("description", editedBook.description);
    formData.append("category", editedBook.category);
    formData.append("author", editedBook.author);

    const info = await axios.put(
      "http://localhost:3001/book/update" + editedBook.id,
      formData
    );

    const res = info.data;

  };
  return (
    <div className={style.container}>
      <h1>Update Books</h1>
      <br/>
      <input
        name="search"
        value={input.search}
        onChange={(e) => handleSearch(e)}
      />
      <button type="button" onClick={handleClickSearch}>
        Search
      </button>
      <form className={style.form} onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name="title"
          value={editedBook.title}
          onChange={(e) => handleChange(e)}
        />
        <label>Description</label>
        <input
          name="description"
          value={editedBook.description}
          onChange={(e) => handleChange(e)}
        />
        <label>Author</label>
        <input
          name="author"
          value={editedBook.author}
          onChange={(e) => handleChange(e)}
        />
        <label>Subscription</label>
        <select
          name="subscription"
          value={editedBook.subscription}
          onChange={(e) => handleChange(e)}
        >
          <option value="free">Free</option>
          <option value="subscription">Premium</option>
        </select>
        <label>Category</label>
        <select
          name="category"
          value={editedBook.category}
          onChange={(e) => handleChange(e)}
        >
          {categories?.map((element) => {
            return (
              <option key={element.id} value={element.category}>
                {element.category}
              </option>
            );
          })}
        </select>
        <br/>
        <button type="submit" onSubmit={handleSubmit}>
          Update
        </button>
      </form>
      <button type="button" onClick={handleDelete}>
        Delete Book
      </button>
    </div>
  );
};
