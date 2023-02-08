import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
export const ERROR = 'ERROR'
import { useDispatch } from 'react-redux'

import rutaApi from '../../../../API/api'
import style from '../AllBooks/allBooks.module.css'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 250 },
  { field: 'author', headerName: 'Author', width: 200 },
  { field: 'user', headerName: 'User', width: 200 },
  {
    field: 'subscription',
    headerName: 'Subscription',
    width: 110,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 100,
    renderCell: () => {
      return (
        <>
          <NavLink to="/dashboard/books/bookEdit">
            <button className={style.bookListEdit}>Edit</button>
          </NavLink>
        </>
      )
    },
  },
]

export const AllBooksUsers = () => {
  const dispatch = useDispatch()
  var inicio = []
  const [books, setBooks] = useState(inicio)

  useEffect(() => {
    async function fetchData() {
      try {
        const t = await fetch(`https://server-bookyou.onrender.com/book/`, {
          method: 'GET',
          headers: {
            authorization: `bearer ${localStorage.getItem('token')}`,
          },
        })
        const enviar = await t.json()

        setBooks(enviar)
      } catch (error) {
        dispatch({
          type: ERROR,
          payload: error.message,
        })
      }
    }
    if (books.length == 0) fetchData()
  }, [books])

  const rows = books.map((b) => {
    return {
      id: b.id,
      title: b.title,
      author: b.author,
      user: b.user.username,
      subscription: b.subscription,
    }
  })

  return (
    <div>
      <div className={style.cuadro}>
        {' '}
        <DataGrid
          checkboxSelection
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rows={rows}
          rowsPerPageOptions={[10]}
          style={{ height: 650, width: '500%', top: '5rem' }}
        />{' '}
      </div>
    </div>
  )
}

export default AllBooksUsers
