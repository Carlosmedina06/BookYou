import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

import style from './UserEdit.module.css'

export const UserEdit = () => {
  const users = useSelector((state) => state.users);

  const [input, setInput] = useState({
    search: "",
  });
  const handleSearch = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  
  const [editedUser, setEditedUser] = useState({
    name: "",
    username: "",
    email: "",
    subscription: "",
    role: "",
    id: "",
  });
  const handleClickSearch = () => {
    const user = users.filter((el) => {
      return el.name.toLowerCase() === input.search.toLowerCase();
    });
    setEditedUser({
      name: user[0].name,
      username: user[0].username,
      email: user[0].email,
      subscription: user[0].subscription,
      role: user[0].role,
      id: user[0].id,
    });
  };

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();

    formData.append("name", editedUser.name);
    formData.append("username", editedUser.username);
    formData.append("email", editedUser.email);
    formData.append("subscription", editedUser.subscription);
    formData.append("role", editedUser.role);

    const info = await axios.put(
      "http://localhost:3001/user/update" + editedUser.id,
      formData
    );

    const res = info.data;

    
  };
  const handleDelete = async (e) => {
    const info = await axios.delete(
      "http://localhost:3001/user/delete/" + editedUser.id
    );
    const response = info.data;
    return response;
  };
  return (
    <div className={style.container}>
      <h1>Update Users</h1>
      <br/>
      <input
        name="search"
        value={input.search}
        onChange={(e) => handleSearch(e)}
      />
      <button type="button" onClick={handleClickSearch}>
        Search User
      </button>
      <form className={style.form}>
        <label>Name</label>
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
        </select>
        <br/>
        <button type="submit" onSubmit={handleSubmit}>
          Update
        </button>
      </form>
      <button type="button" onClick={handleDelete}>
        Delete User
      </button>
    </div>
  );
};
