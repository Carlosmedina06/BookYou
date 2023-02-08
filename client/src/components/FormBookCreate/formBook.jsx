import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Confetti from 'react-confetti'
import { Link } from 'react-router-dom'

import { getCategorys } from '../../redux/actions'
import { useForm } from '../../utils/Hooks/useForm'
import Loader from '../Loader/Loader'
import Loading from '../Loading/loading'
import NavBar from '../NavBar/NavBar'
/* import Loading from '../Loading/loading' */

import style from './formBookCss.module.css'
import validationsForm from './ValidationForm'

const PostBook = () => {
  const category = useSelector((state) => state.category)
  const loading = useSelector((state) => state.loading)
  const dispatch = useDispatch()
  //  const loading = true
  const initialForm = {
    title: '',
    description: '',
    author: '',
    subscription: '',
    user: '',
    category: '',
  }

  const {
    form,
    errors,
    handleBlur,
    response,
    handleChangeContent,
    handleChangeImage,
    handleChange,
    setResponse,
    handleSubmit,
  } = useForm(initialForm, validationsForm)

  useEffect(() => {
    dispatch(getCategorys())
  }, [dispatch])

  function handleClear() {
    setResponse('')
  }

  // -------------------------

  if (response !== '') {
    if (!response.message) {
      return (
        <section>
          <div style={{ position: 'absolute', top: '0px', left: '0px' }}>
            <NavBar />
          </div>
          <div>
            <Confetti height={window.innerHeight} width={window.innerWidth} />
            <h1 className={style.h1}>Libro Creado con Exito</h1>
            <button className={style.button} type="button" onClick={handleClear}>
              <Link to="/home">Inicio</Link>
            </button>
          </div>
        </section>
      )
    } else {
      return (
        <div>
          <h1>Request failed with status code 400</h1>
          <h2>{response.message}</h2>
          <button type="button" onClick={handleClear}>
            Noted
          </button>
        </div>
      )
    }
  } else {
    return (
      <div className={style.mainContainer}>
        <div style={{ position: 'absolute', top: '0px', left: '0px' }}>
          <NavBar />
        </div>
        <div>
          <div className={style.cardContainer}>
            {loading && (
              <div className={style.contentCardLoader}>
                <div>
                  <Loader />
                </div>
              </div>
            )}
            {!loading && (
              <form onSubmit={handleSubmit}>
                <div className={style.contentformCard}>
                  <div className={style.formTitle}>
                    <p>Crear Libro</p>
                    {/* <Loader/> */}
                  </div>
                  <div className={style.formInputBox}>
                    <label htmlFor="title">Título</label>
                    <input
                      name="title"
                      placeholder="Título..."
                      type="text"
                      value={form.title}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.title ? <p className={style.small}>{errors.title}</p> : false}
                  </div>
                  <div className={style.formInputBox}>
                    <label htmlFor="description">Descripción</label>
                    <input
                      name="description"
                      placeholder="Descripción corta del escrito."
                      value={form.description}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.description ? (
                      <p className={style.small}>{errors.description}</p>
                    ) : (
                      false
                    )}
                  </div>
                  <div className={style.formInputBox}>
                    <label htmlFor="author">Autor</label>
                    <input
                      name="author"
                      placeholder="Nombre/s"
                      value={form.author}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.author ? <p className={style.small}>{errors.author}</p> : false}
                  </div>
                  <div className={style.formInputBox}>
                    <label htmlFor="subscription">Subscripción</label>
                    <select
                      className={style.formSelect}
                      name="subscription"
                      value={form.subscription}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    >
                      <option value="free">Free</option>
                      <option value="premium">Premium</option>
                    </select>
                  </div>
                  <div className={style.formInputBox}>
                    <label htmlFor="category">Categoría</label>
                    <select
                      className={style.formSelect}
                      name="category"
                      value={form.category}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    >
                      {category?.map((element) => {
                        return (
                          <option key={element.id} value={element.category}>
                            {element.category}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <div className={style.formInputBox}>
                    <label htmlFor="image">Seleccionar Imágen</label>
                    <input
                      className={style.inputFile}
                      name="image"
                      type="file"
                      onChange={(e) => {
                        handleChangeImage(e)
                      }}
                    />
                  </div>
                  <div className={style.formInputBox}>
                    <label htmlFor="pdf">Seleccionar archivo del libro</label>
                    <input
                      accept="application/pdf,application/msword,
                        application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className={style.inputFile}
                      name="pdf"
                      type="file"
                      onChange={(e) => {
                        handleChangeContent(e)
                      }}
                    />
                  </div>
                  <button className={style.buttonSubmit} type="submit">
                    Crear Libro
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PostBook
