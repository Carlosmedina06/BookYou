import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCategorys } from '../../redux/actions'
import { useForm } from '../../utils/Hooks/useForm'
import NavBar from '../NavBar/NavBar'

import style from '../FormBookCreate/formBook.module.css'
import CssGenerico from '../CssGenerico/CssGenerico.module.css'

import { Container, FormContent, FormItem, Input, InputFile, Select } from './formBookStyle'
import validationsForm from './ValidationForm'

const PostBook = () => {
  const category = useSelector((state) => state.category)

  const dispatch = useDispatch()

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
          <div className={style.navbar}>
            <NavBar />
          </div>
          <div>
            <h1 className={style.h1}>Created succesfully!</h1>
            <button className={style.button} type="button" onClick={handleClear}>
              Noted
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
      
      <Container>
        <div style={{ position: 'absolute', top: '0px', left:'0px'}}>
          <NavBar />
        </div>
        <div>
          <FormContent onSubmit={handleSubmit}>
            {/* // input title  */}
            <FormItem>
              <label htmlFor="title">Title</label>
              <Input
                name="title"
                placeholder="Title..."
                type="text"
                value={form.title}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.title ? (
                <h5>
                  <small>{errors.title}</small>
                </h5>
              ) : (
                false
              )}
            </FormItem>
            {/* // input title  */}

            {/* // input description  */}
            <FormItem>
              <label htmlFor="description">Description</label>
              <Input
                name="description"
                placeholder="Short review of the writing"
                value={form.description}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.description ? (
                <h5>
                  <small>{errors.description}</small>
                </h5>
              ) : (
                false
              )}
            </FormItem>
            {/* // input description  */}

            <FormItem>
              <label htmlFor="author">Author</label>
              <Input
                name="author"
                placeholder="Name/s"
                value={form.author}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.author ? (
                <h5>
                  <small>{errors.author}</small>
                </h5>
              ) : (
                false
              )}
            </FormItem>

            <FormItem>
              <label htmlFor="subscription">Subscription: </label>
              <Select
                name="subscription"
                value={form.subscription}
                onBlur={handleBlur}
                onChange={handleChange}
              >
                <option value="free">Free</option>
                <option value="premium">Premium</option>
              </Select>
            </FormItem>

            <FormItem>
              <label htmlFor="category">Category: </label>
              <Select
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
              </Select>
            </FormItem>

            {/* // input img  */}
            <FormItem>
              <label htmlFor="image">Select Image file</label>
              <InputFile
                className="inputFile"
                name="image"
                type="file"
                onChange={(e) => {
                  handleChangeImage(e)
                }}
              />
            </FormItem>
            {/* // input img  */}

            {/* // input pdf  */}
            <FormItem>
              
              <label htmlFor="pdf">
                Select book file
                <InputFile
                  accept="application/pdf,application/msword,
                        application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  name="pdf"
                  type="file"
                  onChange={(e) => {
                    handleChangeContent(e)
                  }}
                />
              </label>
            </FormItem>
            {/* // input pdf  */}

            {/* <button type="button" onClick={(e) => handleReset(e)}>
              RESET
            </button> */}

            <button 
            className={style.button}
            type="submit" onSubmit={handleSubmit}>
              CREATE BOOK!
            </button>
          </FormContent>
        </div>
      </Container>
    )
  }
}

export default PostBook
