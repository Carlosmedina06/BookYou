import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

import api from '../../../utils/axios/axios'

import style from './CommentCard.module.css'
export const CommentCard = ({ comment, rata, setRata }) => {
  const [comentario, setComentario] = useState({})
  const [response, setResponse] = useState('')

  useEffect(() => {
    setComentario(comment)
  }, [comentario, comment, response])

  const handleBan = async () => {
    const banned = await api.get(`/user/${comentario.user}`)
    const bannedUser = banned.data
    const dataUserForBan = { ...bannedUser, strike: bannedUser.strike + 1 }

    await api
      .put(`/user/update`, dataUserForBan, {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        Swal.fire({
          title: res.data,
          icon: 'success',
          timer: 3000,
        })
        setRata(!rata)
      })
  }
  const handleDelete = async () => {
    const info = await api
      .put(`/comment/delete/${comentario.id}`, null, {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        Swal.fire({
          title: res.data,
          icon: 'info',
        })
        setResponse(res.data)
        setRata(!rata)
      })
    const r = info.data
  }

  const handleClear = async () => {
    const clearComment = comentario

    clearComment.report = 0
    try {
      await api
        .put(`/comment/update/${clearComment.id}`, clearComment, {
          headers: {
            authorization: `bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          Swal.fire({
            title: res.data,
            icon: 'success',
            timer: 3000,
          })
          setResponse(res.data)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div key="" className={style.container}>
      <div className={style.content}>
        <div className={style.title}>
          <h1>Usuario {comentario.username}</h1>
          <h3 className={style.report}>{comentario.report} reportes</h3>
        </div>
        <div className={style.message}>
          <p>{comentario.comment}</p>
        </div>
      </div>
      <div className={style.buttons}>
        <button type="button" onClick={handleDelete}>
          Borrar
        </button>
        <button type="button" onClick={handleBan}>
          Ban
        </button>
        <button type="button" onClick={handleClear}>
          Limpiar
        </button>
      </div>
    </div>
  )
}
