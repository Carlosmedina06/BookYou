import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoader } from '../../redux/actions/index.js'


import api from '../axios/axios.js'

export const useForm = (initialForm, validationsForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [content, setContent] = useState()
  const [img, setImg] = useState()
  const [response, setResponse] = useState('')
  
  
  // const loading = useSelector(state => state.loader)
  const handleSubmit = async (evt) => {
  const dispatch = useDispatch()
  /  dispatch(setLoader(true))      
    evt.preventDefault()
    try {
      setErrors(validationsForm(form))
      if (Object.keys(errors).length === 0) {
        const formData = new FormData()

        formData.append('content', content)
        formData.append('img', img)
        formData.append('title', form.title)
        formData.append('description', form.description)
        formData.append('category', form.category)
        formData.append('author', form.author)
        formData.append('subscription', form.subscription)

        const info = await api.post('/book/create', formData, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })

        const res = info.data
        if(res){dispatch(setLoader(false))}
        setResponse(res)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      dispatch(setLoader(false))
      console.log({ error: error.response.data })
    }
  }

  const handleBlur = (evt) => {
    handleChange(evt)
    setErrors(validationsForm(form))
  }
  const handleChange = (evt) => {
    return setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleChangeContent = (e) => {
    setContent(e.target.files[0])
  }
  const handleChangeImage = (e) => {
    setImg(e.target.files[0])
  }

  return {
    form,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    handleChangeContent,
    handleChangeImage,
    response,
    setResponse,
  }
}
