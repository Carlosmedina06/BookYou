import React from 'react'
import Swal from 'sweetalert2'
import { useEffect } from 'react'

const AllertComment = () => {
  useEffect(() => {
    mostrarAlertaPorComentarioInapropiado()
  }, [])

  const mostrarAlertaPorComentarioInapropiado = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'El mensaje contiene palabras inapropiadas',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
      }
    })
  }

  return (
    <div>
      <div> Alert </div>
    </div>
  )
}

export default AllertComment
