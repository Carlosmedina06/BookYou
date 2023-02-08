import api from '../../../utils/axios/axios'

import style from './CommentCard.module.css'
export const CommentCard = ({ comment }) => {
  const handleDelete = async () => {
    const info = await api.put(`/comment/delete/${comment.id}`, null, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`,
      },
    })
    const response = info.data
  }

  const handleBan = async () => {
    const banned = await api.get(`/user/${comment.user}`)
    const bannedUser = banned.data
    const dataUserForBan = { ...bannedUser, strike: bannedUser.strike + 1 }

    const info = await api.put(`/user/update`, dataUserForBan, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`,
      },
    })
    const response = info.data

    console.log(response)
  }
  const handleClear = async () => {
    const turnReportToZero = { ...comment, report: 0 }

    const info = await api.put(`/comment/update/${comment.id}`, turnReportToZero, {
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`,
      },
    })
    const response = info.data
  }

  return (
    <div key="" className={style.container}>
      <div className={style.content}>
        <div className={style.title}>
          <h1>Usuario {comment.username}</h1>
          <h3 className={style.report}>{comment.report} reportes</h3>
        </div>
        <div className={style.message}>
          <p>{comment.comment}</p>
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
