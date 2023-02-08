import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import api from '../../../utils/axios/axios'

import style from './CommentCard.module.css'
export const CommentCard = ({ comment }) => {
  const [comentario, setComentario] = useState({})
  const handleDelete = async () => {
    const info = await api.put(`/comment/delete/${comentario.id}`, null, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`,
      },
    })
    const response = info.data
  }

  useEffect(() => {
    setComentario(comment)
  }, [comentario, comment])

  const handleBan = async () => {
    const banned = await api.get(`/user/${comentario.user}`)
    const bannedUser = banned.data
    const dataUserForBan = { ...bannedUser, strike: bannedUser.strike + 1 }

    await api.put(`/user/update`, dataUserForBan, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`,
      },
    })
  }
  const handleClear = () => {
    setComentario({ ...comentario, report: 0 })

    try {
      api
        .put(`/comment/update/${comentario.id}`, comentario, {
          headers: {
            authorization: `bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          console.log(res.data)
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
