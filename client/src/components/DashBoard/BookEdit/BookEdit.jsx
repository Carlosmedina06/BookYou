import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2'

import { getBooks } from '../../../redux/actions'
import SideBar from '../../DashAdmin/sideBar/sideBar'
import api from '../../../utils/axios/axios.js'

import style from './BookEdit.module.css'

export const BookEdit = () => {
  const books = useSelector((state) => state.allBooks)
  const categories = useSelector((state) => state.category)
  const dispatch = useDispatch()
  const [editedBook, setEditedBook] = useState({
    title: '',
    description: '',
    author: '',
    category: '',
    subscription: '',
    id: '',
  })

  const [input, setInput] = useState({
    search: '',
    select: '',
  })

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch, editedBook])
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
    const info = await api
      .put(`/book/delete/${editedBook.id}`, null, {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        Swal.fire({
          title: res.data,
          icon: 'Error',
        })
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

    const info = await api
      .put(`/book/update/${editedBook.id}`, formData, {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        Swal.fire({
          title: res.data,
          timer: 2000,
        })
        setEditedBook({
          title: '',
          description: '',
          author: '',
          category: '',
          subscription: '',
          id: '',
        })
      })
  }

  return (
    <>
      <SideBar />
      <div className={style.container}>
        <h1>Modificar Libro</h1>
        <br />
        <label htmlFor="search">Nombre del libro</label>
        <input
          name="search"
          placeholder="Nombre del libro"
          value={input.search}
          onChange={(e) => handleSearch(e)}
        />
        <br />
        <label htmlFor="books">Selecciona el libro</label>
        <select name="books" value={input.select} onChange={(e) => handleBookSelect(e)}>
          <option value="none">Selecciona el libro</option>
          {books?.map((element) => {
            return (
              <option key={element.id} value={element.title}>
                {element.title}
              </option>
            )
          })}
        </select>
        <button type="button" onClick={handleClickSearch}>
          Buscar
        </button>
        <form className={style.form} onSubmit={handleSubmit}>
          <label>Título</label>
          <input name="title" value={editedBook.title} onChange={(e) => handleChange(e)} />
          <label>Descripción</label>
          <textarea
            className={style.textArea}
            cols={39}
            name="description"
            rows={10}
            value={editedBook.description}
            onChange={(e) => handleChange(e)}
          />
          <label>Autor</label>
          <input name="author" value={editedBook.author} onChange={(e) => handleChange(e)} />
          <label>Subscripción</label>
          <select
            name="subscription"
            value={editedBook.subscription}
            onChange={(e) => handleChange(e)}
          >
            <option value="none" />
            <option value="free">Free</option>
            <option value="premium">Premium</option>
          </select>
          <label>Categoría</label>
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
          <button type="submit">Actualizar</button>
        </form>
        <button type="button" onClick={handleDelete}>
          Borrar Libro
        </button>
      </div>
    </>
  )
}
