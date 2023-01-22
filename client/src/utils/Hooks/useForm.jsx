import axios from 'axios'
import { useState } from 'react'

export const useForm = (initialForm, validationsForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [content, setContent] = useState()
  const [img, setImg] = useState()
  const [response, setResponse] = useState('')

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setErrors(validationsForm(form))
    if (Object.keys(errors).length === 0) {
      const formData = new FormData()

      formData.append('content', content)
      formData.append('img', img)
      formData.append('title', form.title)
      formData.append('description', form.description)
      formData.append('category', form.category)
      formData.append('author', form.author)

      const info = await axios.post('http://localhost:3001/book/create', formData)

      const res = info.data

      setResponse(res)
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
