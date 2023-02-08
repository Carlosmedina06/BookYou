import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUsers } from '../../../redux/actions'
import api from '../../../utils/axios/axios'
import SideBar from '../../DashAdmin/sideBar/sideBar'

import { CommentCard } from './CommentCard'
import style from './CommentEdit.module.css'

export const CommentEdit = () => {
  const [rata, setRata] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch, rata])

  const users = useSelector((state) => state.users)

  // const books = useSelector((state)=> state.allBooks)
  const [input, setInput] = useState({
    searchUser: '',
    searchBook: '',
    select: '',
    userSelectId: '',
  })
  const [commentsPerUser, setCommentsPerUser] = useState([])
  const [markedComments, setMarkedComments] = useState([])

  const handleSearch = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }
  const getAllComments = async (numero) => {
    const info = await api.get(`/comment/${numero}`)
    const comments = info.data

    return comments
  }
  const handleSearchUserInput = async (_e) => {
    setMarkedComments([])
    setInput({
      ...input,
      select: '',
    })

    const commentsAvailable = await getAllComments(0)
    const allCommentsUser = commentsAvailable?.filter((el) => {
      if (el.available) {
        return el.username.toLowerCase() === input.searchUser.toLowerCase()
      }
    })

    setRata(!rata)
    setCommentsPerUser(allCommentsUser)
  }

  const handleUserSelect = async (e) => {
    setMarkedComments([])
    setInput({
      ...input,
      select: e.target.value,
      searchUser: '',
    })

    const commentsAvailable = await getAllComments(0)
    const allCommentsUser = commentsAvailable?.filter((el) => {
      if (el.available) {
        return el.username.toLowerCase() === e.target.value.toLowerCase()
      }
    })

    setRata(!rata)
    setCommentsPerUser(allCommentsUser)
  }

  const handleClickFindMarkedComments = async () => {
    setInput({
      ...input,
      select: '',
      searchUser: '',
    })
    setCommentsPerUser([])

    const allComments = await getAllComments(1)
    const allMarkedComments = allComments.filter((elem) => {
      if (elem.available) {
        return elem.report > 0
      }
    })
    const allMarkedCommentsAscendingOrder = allMarkedComments.sort((a, b) =>
      a.report > b.report ? -1 : 1,
    )

    setMarkedComments([...allMarkedCommentsAscendingOrder])
    setRata(!rata)
  }

  return (
    <>
      <div className={style.all}>
        <SideBar />

        <div className={style.container}>
          <label>Buscar Comentario por Usuario</label>
          <input name="searchUser" value={input.searchUser} onChange={(e) => handleSearch(e)} />
          <button type="button" onClick={handleSearchUserInput}>
            Buscar
          </button>
          <br />
          <label>O elegir Usuario de la lista</label>
          <select name="usersSelect" value={input.select} onChange={(e) => handleUserSelect(e)}>
            <option value="none" />
            {users?.map((element) => {
              return (
                <option key={element.id} value={element.name}>
                  {element.name}
                </option>
              )
            })}
          </select>

          <button type="button" onClick={handleClickFindMarkedComments}>
            Buscar Alertas
          </button>
          {markedComments.map((el, i) => {
            return <CommentCard key={i} comment={el} rata={rata} setRata={setRata} />
          })}

          {commentsPerUser.map((el, i) => {
            return <CommentCard key={i} comment={el} rata={rata} setRata={setRata} />
          })}
        </div>
      </div>
    </>
  )
}
