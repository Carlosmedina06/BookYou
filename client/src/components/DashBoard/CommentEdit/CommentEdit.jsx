import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

import style from './CommentEdit.module.css'

export const CommentEdit = () => {
  const users = useSelector((state) => state.users);
  const books = useSelector((state)=> state.allBooks)

  const [input, setInput] = useState({
    searchUser: "",
    searchBook:"",
  });

  const handleSearch = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  
  const [book, setBook] = useState({
    comments: [],
    
  });

  const handleClickSearchBook = async () => {
    
    const book = books.filter((el) => {
      return el.title.toLowerCase() === input.searchBook.toLowerCase();
    });
    const id = book[0].id
    console.log(id)
    const details = await axios.get('https://bookyou-production.up.railway.app/book/'+id)
    const bookDetails = details.data
    console.log(bookDetails)
    // const endpoints = book[0].comment.map((id)=> ('https://bookyou-production.up.railway.app/comment/user/'+id))
    // //console.log(endpoints)
    // Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
    //     axios.spread((...allData) => {
    //       console.log({ allData });
    //     })
    //   );
   
    setBook({
      comments: book[0].comment
    });
    
  };

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();

    formData.append("name", editedUser.name);
    
    const info = await axios.put(
      "http://localhost:3001/user/update" + editedUser.id,
      formData
    );

    const res = info.data;

    
  };
  const handleDelete = async (e) => {
    const info = await axios.delete(
      "http://localhost:3001/comment/delete/" + editedUser.id
    );
    const response = info.data;
    return response;
  };

  return (
    <div className={style.container}>
      <label>Search User Comments</label>
      <input
        name="searchUser"
        value={input.search}
        onChange={(e) => handleSearch(e)}
      />
      <label>Search Book Comments</label>
      <input
        name="searchBook"
        value={input.search}
        onChange={(e) => handleSearch(e)}
      />
      <button type="button" onClick={handleClickSearchBook}>
        Buscar
      </button>
      
      <form>
        {/* <label>Name</label>
        <input
          name="name"
          value={editedUser.name}
          onChange={(e) => handleChange(e)}
        />
        <label>Username</label>
        <input
          name="username"
          value={editedUser.username}
          onChange={(e) => handleChange(e)}
        />
        <label>Email</label>
        <input
          name="email"
          value={editedUser.email}
          onChange={(e) => handleChange(e)}
        />
        <label>Subscription</label>
        <select
          name="subscription"
          value={editedUser.subscription}
          onChange={(e) => handleChange(e)}
        >
          <option value="free">Free</option>
          <option value="subscription">Premium</option>
        </select>
        <label>Role</label>
        <select
          name="role"
          value={editedUser.role}
          onChange={(e) => handleChange(e)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select> */}
        <br/>
        <button type="submit" onSubmit={handleSubmit}>
          Update
        </button>
      </form>
      <button type="button" onClick={handleDelete}>
        Delete Comment
      </button>
    </div>
  );
};