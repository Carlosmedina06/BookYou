import { useState } from 'react'
import { useSelector } from 'react-redux'

import SideBar from '../../DashAdmin/sideBar/sideBar'
import rutaApi from '../../../../API/api'

import { CommentCard } from './CommentCard'
import style from './CommentEdit.module.css'

export const CommentEdit = () => {
  const users = useSelector((state) => state.users)
  const books = useSelector((state) => state.allBooks)

  const [input, setInput] = useState({
    searchUser: '',
    searchBook: '',
    select: '',
  })

  const handleSearch = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const [book, setBook] = useState({
    comments: [],
  })

  const handleClickSearchBook = async () => {
    const book = books.filter((el) => {
      return el.title.toLowerCase().trim() === input.searchBook.toLowerCase().trim()
    })
    const id = book[0].id

    console.log(input.searchBook)
    const details = await axios.get('https://server-bookyou.onrender.com/book/' + id)
    const bookDetails = details.data

    console.log(bookDetails)
    // const endpoints = book[0].comment.map((id)=> ('https://bookyou-production.up.railway.app/comment/user/'+id))
    // //console.log(endpoints)
    // Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
    //     axios.spread((...allData) => {
    //       console.log({ allData });
    //     })
    //   );

    setBook({
      //comments: bookDetails.comment
      comments: book.comment,
    })
    console.log(book)
  }
  const handleClickSearchUser = (e) => {}
  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('name', editedUser.name)

    const info = await axios.put(
      'https://server-bookyou.onrender.com/user/update' + editedUser.id,
      formData,
    )

    const res = info.data
  }
  const handleDelete = async (e) => {
    // const info = await axios.delete(
    //   "https://bookyou-production.up.railway.app/comment/delete/" + editedUser.id
    // );
    // const response = info.data;
    // return response;

    const info = await axios.get('https://server-bookyou.onrender.com/comment/')
    const comments = info.data

    console.log(comments)
  }

  return (
    <>
      <SideBar />

      <div className={style.container}>
        <label>Search User Comments</label>
        <input name="searchUser" value={input.search} onChange={(e) => handleSearch(e)} />
        <br />
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
        <label>Search Book Comments</label>
        <input name="searchBook" value={input.search} onChange={(e) => handleSearch(e)} />
        <button type="button" onClick={handleClickSearchUser}>
          Buscar
        </button>
        {book.comments.map((el) => {
          return <CommentCard key={el} comment={el} />
        })}

        <button type="button" onClick={handleDelete}>
          Delete Comment
        </button>
      </div>
    </>
  )
}
