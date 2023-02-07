import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import NavBar from '../NavBar/NavBar'
import { getBookById, getCategorys } from '../../redux/actions'
import api from '../../utils/axios/axios'

import style from './formBookEdit.module.css'
import BookUpdateEdit from './components/BookEditInputBox'
import BookUpdateEditInputBox from './components/BookEditInputBox'
import BookUpdateEditInputSelect from './components/BookEditInputSelect'

const FormBookUpdate = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const book = useSelector((state) => state.detail)
  const categories = useSelector((state) => state.category)

  const [editedBook, setEditedBook] = useState({
    title: '',
    description: '',
    author: '',
    category: '',
    subscription: '',
    id: '',
  })

  useEffect(() => {
    dispatch(getBookById(id))
    dispatch(getCategorys())
  }, [dispatch, id])

  useEffect(() => {
    setEditedBook({
      title: book.title,
      description: book.description,
      author: book.author,
      category: book.category,
      subscription: book.subscription,
      id: book.id,
    })
  }, [book])

  const handleChange = (e) => {
    e.preventDefault()
    setEditedBook({ ...editedBook, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const info = await api
      .put(`/book/update/${editedBook.id}`, editedBook, {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: res.data,
          showConfirmButton: false,
          timer: 1500,
        }),
          navigate('/home')
      })
  }

  return (
    <div className={style.mainContainer}>
    <div style={{ position: 'absolute', top: '0px', left: '0px' }}>
      <NavBar />
    </div>
    <div>
      <div className={style.cardContainer}>
      <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.formTitle}>
                  <p>Actualizar Libro</p>
                </div>
      <div className={style.contentformCard}>
        <BookUpdateEditInputBox label={"Titulo"} name={"title"} value={editedBook.title} onChange={(e) => handleChange(e)}   />
         {/* <label>Title</label>
        <input name="title" value={editedBook.title} onChange={(e) => handleChange(e)} />  */}
        <BookUpdateEditInputBox label={"Descripcion"} name="description"  value={editedBook.description} onChange={(e) => handleChange(e)}/>
        {/* <label>Description</label>
        <input
          name="description"
          value={editedBook.description}
          onChange={(e) => handleChange(e)}
        /> */}
        <BookUpdateEditInputBox name="author" label={"Autor"} value={editedBook.author} onChange={(e) => handleChange(e)}  />
        {/* <label>Author</label>
        <input name="author" value={editedBook.author} onChange={(e) => handleChange(e)} /> */}
         {/* <BookUpdateEditInputSelect label={"Subscription"} value={editedBook.subscription} onChange={(e) => handleChange(e)}/> */}
        
         <div className={style.formInputBox}>
                  <label htmlFor="category">Categoria</label>
                  <select
                    className={style.formSelect}
                    name="category"
                    value={editedBook.category}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="none">Categorias</option>
                    {categories?.map((element) => {
                      return (
                        <option key={element.id} value={element.category}>
                          {element.category}
                        </option>
                      )
                    })}
                  </select>
                </div>
                {/* <label>Category</label>
        <select name="category" value={editedBook.category} onChange={(e) => handleChange(e)}>
          <option value="none">Categorias</option>
          {categories?.map((element) => {
            return (
              <option key={element.id} value={element.category}>
                {element.category}
              </option>
            )
          })}
        </select> */}
        
        <div className={style.formInputBox}>
                  <label htmlFor="suscription">Subscripcion</label>
                  <select
                    className={style.formSelect}
                    name="subscription"
                    value={editedBook.subscription}
                    onChange={(e) => handleChange(e)}
                  >
                     <option value="none" /> 
                    <option value="free">Free</option>
                    <option value="premium">Premium</option>
                  </select>
                </div>
        
        {/* <label>Subscription</label>
        <select
          name="subscription"
          value={editedBook.subscription}
          onChange={(e) => handleChange(e)}
        >
          <option value="none" />
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </select>
         */}
        <br />

         <div className={style.buttonSubmit}>
                    <button  type= "submit">Guardar</button>
                </div> 
        {/* <button type="submit">Update</button> */}
        </div>
      </form>
      </div>
        </div>
      </div>
  )
}

export default FormBookUpdate
