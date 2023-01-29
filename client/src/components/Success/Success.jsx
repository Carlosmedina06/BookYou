import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Success = () => {
  useEffect(() => {
    try {
      axios.put('http://localhost:3001/success', null, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error: error.response.data })
    }
  }, [])

  return (
    <>
      <h1>LISTO YA ERES PREMIUM SALUDOS!</h1>
      <Link>
        <button>Regresar al home</button>
      </Link>
    </>
  )
}

export default Success
