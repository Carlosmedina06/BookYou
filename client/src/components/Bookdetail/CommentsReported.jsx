import React from 'react'
import { useState } from 'react'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'

const CommentsReported = () => {
  const [contador, setContador] = useState(0)

  return (
    <div>
      <PriorityHighIcon
        onClick={() => {
          setContador(contador + 1)
        }}
      />
    </div>
  )
}

export default CommentsReported
