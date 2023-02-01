import { DataGrid } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
/* import { useState } from 'react' */
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

import style from '../AllUsers/allUser.module.css'

/* import { userRows } from './dataUserRow' */

export const handleDeleteBook = async (row) => {
  try {
    const borrar = await fetch(`https://bookyou-production.up.railway.app/delete/${row.row.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((r) => r.json())
  } catch (error) {
    console.log(error)
  }
}

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'username', headerName: 'UserName', width: 130 },
  {
    field: 'role',
    headerName: 'Role',
    width: 190,
  },
  { field: 'subscription', headerName: 'Subscription', width: 130 },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 190,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <NavLink to="/dashboard/usuarios/editar">
            <button className={style.userListEdit}>Edit</button>
            {/* EL EDIT TIENE QUE LLEVAR AL FORMULARIO DE "USEREDIT" */}
          </NavLink>
          <DeleteIcon
            className={style.userListDelete}
            onClick={() => handleDeleteBook(params.row.id)}
          />
        </>
      )
    },
  },
]

export const AllUsers = () => {
  /*  const [data, setData] = useState(userRows)
  const handleDelete = (id) => {
    setData(data.filter((i) => i.id !== id))
  }  */
  var inicio = []
  const [users, setUsers] = useState(inicio)
  /*   const router = useRouter() */

  useEffect(() => {
    async function fetchData() {
      try {
        const t = await fetch(`https://bookyou-production.up.railway.app/user/`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        })
        const enviar = await t.json()

        setUsers(enviar)
      } catch (err) {
        console.log(err)
      }
    }
    if (users.length == 0) fetchData()
  }, [users])

  const rows = users.map((u) => {
    return {
      id: u.id,
      name: u.name,
      username: u.username,
      role: u.role,
      email: u.email,
      subscription: u.subscription,
    }
  })

  return (
    <div>
      <div>
        <DataGrid
          checkboxSelection
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rows={rows}
          rowsPerPageOptions={[10]}
          style={{ height: 400, width: '160%' }}
        />
      </div>
    </div>
  )
}

export default AllUsers
