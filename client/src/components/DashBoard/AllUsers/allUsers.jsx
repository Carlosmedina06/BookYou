import { DataGrid } from '@mui/x-data-grid'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
export const ERROR = 'ERROR'
import { useDispatch } from 'react-redux'

import rutaApi from '../../../../API/api'
import style from '../AllUsers/allUser.module.css'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'username', headerName: 'UserName', width: 130 },
  {
    field: 'role',
    headerName: 'Role',
    width: 80,
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
    width: 90,
    renderCell: () => {
      return (
        <>
          <NavLink to="/dashboard/usuarios/userEdit">
            <button className={style.userListEdit}>Edit</button>
          </NavLink>
        </>
      )
    },
  },
]

export const AllUsers = () => {
  const dispatch = useDispatch()
  var inicio = []
  const [users, setUsers] = useState(inicio)

  useEffect(() => {
    async function fetchData() {
      try {
        const t = await fetch(`https://server-bookyou.onrender.com/user/`, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        })
        const enviar = await t.json()

        setUsers(enviar)
      } catch (error) {
        dispatch({
          type: ERROR,
          payload: error.message,
        })
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
      <div className={style.cuadro}>
        <DataGrid
          checkboxSelection
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rows={rows}
          rowsPerPageOptions={[10]}
          style={{ height: 650, width: '500%', /*top: '10rem'*/ }}
        />
      </div>
    </div>
  )
}

export default AllUsers
