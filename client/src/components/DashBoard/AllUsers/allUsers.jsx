import { DataGrid } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import style from '../AllUsers/allUser.module.css'

import { userRows } from './dataUserRow'

export const AllUsers = () => {
  const [data, setData] = useState(userRows)
  const handleDelete = (id) => {
    setData(data.filter((i) => i.id !== id))
  } /* borra pero hay que guardar ese borrado para que al actualizar la pagina no vuelva a aparecer */

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Name', headerName: 'Name', width: 130 },
    { field: 'UserName', headerName: 'UserName', width: 130 },
    { field: 'Suscription', headerName: 'Suscription', width: 130 },
    {
      field: 'Status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'Books',
      headerName: 'Cant. Libros',
      type: 'number',
      width: 90,
    },
    {
      field: 'Email',
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
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div>
      <div>
        <DataGrid
          checkboxSelection
          disableSelectionOnClick
          columns={columns}
          pageSize={5}
          rows={data}
          rowsPerPageOptions={[5]}
          style={{ height: 400, width: '160%' }}
        />
      </div>
    </div>
  )
}

export default AllUsers
