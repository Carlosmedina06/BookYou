import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import style from '../Pagination/Pagination.module.css'

export default function BasicPagination({ filterBooks }) {
  return (
    <Stack spacing={2}>
      <Pagination className={style.paginacion} count={filterBooks} />
    </Stack>
  )
}
