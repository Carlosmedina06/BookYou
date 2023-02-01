import { DataGrid } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
/* import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast' */
import { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import style from '../AllBooks/allBooks.module.css'

export const handleDeleteBook = async (row) => {
  try {
    const borrar = await fetch(
      `https://bookyou-production.up.railway.app/book/delete/${row.row.id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      },
    ).then((r) => r.json())
  } catch (error) {
    console.log(error)
  }
}

/* export const deleteBook = async (id) => {
  const info = axios.delete('https://bookyou-production.up.railway.app/book/delete/' + id)
  const response = info.data

  return response
} */

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 250 },
  { field: 'author', headerName: 'Author', width: 200 },
  {
    field: 'subscription',
    headerName: 'Subscription',
    width: 150,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: (row) => {
      return (
        <>
          <NavLink to="/dashboard/books/editar">
            <button className={style.bookListEdit}>Edit</button>
            {/* EL EDIT TIENE QUE LLEVAR AL FORMULARIO DE "USEREDIT" */}
          </NavLink>
          <DeleteIcon
            className={style.bookListDelete}
            onClick={() => {
              handleDeleteBook({ row }).then(() => location.reload())
            }}
          >
            Eliminar
          </DeleteIcon>
        </>
      )
    },
  },
]

export const AllBooksUsers = () => {
  var inicio = []
  const [books, setBooks] = useState(inicio)

  useEffect(() => {
    async function fetchData() {
      try {
        const t = await fetch(`https://bookyou-production.up.railway.app/book/`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        })
        const enviar = await t.json()

        setBooks(enviar)
      } catch (err) {
        console.log(err)
      }
    }
    if (books.length == 0) fetchData()
  }, [books])

  const rows = books.map((b) => {
    return {
      id: b.id,
      title: b.title,
      author: b.author,
      subscription: b.subscription,
    }
  })

  return (
    <div>
      <div style={{ height: 400, width: '170%' }}>
        {' '}
        <DataGrid
          checkboxSelection
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rows={rows}
          rowsPerPageOptions={[10]}
        />{' '}
      </div>
    </div>
  )
}

export default AllBooksUsers
