import { useState } from 'react'
import { useSelector } from 'react-redux'

import rutaApi from '../../../../API/api'
import SideBar from '../../DashAdmin/sideBar/sideBar'

import style from './BookEdit.module.css'

export const BookEdit = () => {
  const books = useSelector((state) => state.allBooks)
  const categories = useSelector((state) => state.category)

  const [input, setInput] = useState({
    search: '',
    select: '',
  })
  const handleSearch = (e) => {
    setInput({
      search: e.target.value,
      select: '',
    })
  }
  const handleBookSelect = (e) => {
    setInput({
      search: '',
      select: e.target.value,
    })
    const book = books.filter((el) => {
      return el.title.toLowerCase().trim() === e.target.value.toLowerCase().trim()
    })

    setEditedBook({
      title: book[0].title,
      description: book[0].description,
      author: book[0].author,
      category: book[0].category,
      subscription: book[0].subscription,
      id: book[0].id,
    })
  }
  const [editedBook, setEditedBook] = useState({
    title: '',
    description: '',
    author: '',
    category: '',
    subscription: '',
    id: '',
  })
  const handleClickSearch = () => {
    const book = books.filter((el) => {
      return el.title.toLowerCase().trim() === input.search.toLowerCase().trim()
    })

    setEditedBook({
      title: book[0].title,
      description: book[0].description,
      author: book[0].author,
      category: book[0].category,
      subscription: book[0].subscription,
      id: book[0].id,
    })
  }

  const handleChange = (e) => {
    setEditedBook({ ...editedBook, [e.target.name]: e.target.value })
  }

  const handleDelete = async () => {
    const info = await rutaApi.delete(`/book/delete/${editedBook.id}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`,
      },
    })

    const response = await info

    setEditedBook({
      title: '',
      description: '',
      author: '',
      category: '',
      subscription: '',
      id: '',
    })
    setInput({
      search: '',
      select: '',
    })

    return response
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('title', editedBook.title)
    formData.append('description', editedBook.description)
    formData.append('category', editedBook.category)
    formData.append('author', editedBook.author)
    formData.append('subscription', editedBook.subscription)

    const info = await rutaApi.put(`/book/update/${editedBook.id}`, formData, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`,
      },
    })
  }

  return (
    <>
      <SideBar />
      <div className={style.container}>
        <h1>Update Books</h1>
        <br />
        <input
          name="search"
          placeholder="Enter book name"
          value={input.search}
          onChange={(e) => handleSearch(e)}
        />
        <br />
        <select name="books" value={input.select} onChange={(e) => handleBookSelect(e)}>
          <option value="none" />
          {books?.map((element) => {
            return (
              <option key={element.id} value={element.title}>
                {element.title}
              </option>
            )
          })}
        </select>
        <button type="button" onClick={handleClickSearch}>
          Search
        </button>
        <form className={style.form} onSubmit={handleSubmit}>
          <label>Title</label>
          <input name="title" value={editedBook.title} onChange={(e) => handleChange(e)} />
          <label>Description</label>
          <input
            name="description"
            value={editedBook.description}
            onChange={(e) => handleChange(e)}
          />
          <label>Author</label>
          <input name="author" value={editedBook.author} onChange={(e) => handleChange(e)} />
          <label>Subscription</label>
          <select
            name="subscription"
            value={editedBook.subscription}
            onChange={(e) => handleChange(e)}
          >
            <option value="none" />
            <option value="free">Free</option>
            <option value="premium">Premium</option>
          </select>
          <label>Category</label>
          <select name="category" value={editedBook.category} onChange={(e) => handleChange(e)}>
            <option value="none" />
            {categories?.map((element) => {
              return (
                <option key={element.id} value={element.category}>
                  {element.category}
                </option>
              )
            })}
          </select>
          <br />
          <button type="submit" onSubmit={handleSubmit}>
            Update
          </button>
        </form>
        <button type="button" onClick={handleDelete}>
          Delete Book
        </button>
      </div>
    </>
  )
}
