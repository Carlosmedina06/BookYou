import { DataGrid } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import style from '../AllUsers/allUser.module.css'

import { bookRows } from './dataBooks'

export const AllBooksUsers = () => {
  const [data, setData] = useState(bookRows)
  const handleDelete = (id) => {
    setData(data.filter((i) => i.id !== id))
  } /* borra pero hay que guardar ese borrado para que al actualizar la pagina no vuelva a aparecer */

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'UserName', width: 190 },
    { field: 'books', headerName: 'Books', width: 280 },
    {
      field: 'status',
      headerName: 'Status',

      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <NavLink to="/dashboard/books/editar">
              <button className={style.userListEdit}>Edit</button>
              {/* EL EDIT TIENE QUE LLEVAR AL FORMULARIO DE "BOOKEDIT" */}
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
      <div style={{ height: 400, width: '170%' }}>
        {' '}
        <DataGrid
          checkboxSelection
          columns={columns}
          pageSize={5}
          rows={data}
          rowsPerPageOptions={[5]}
        />{' '}
      </div>
    </div>
  )
}

export default AllBooksUsers
