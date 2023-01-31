import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

import { BtnSuccess, CardSuccess, SuccessContainer } from './SuccessStyle.js'

const Success = () => {
  useEffect(() => {
    Swal.fire({
      title: 'Pagina en Construccion',
      text: 'El diseño de esta pagina aun esta en proceso',
      icon: 'info',
      confirmButtonText: 'Ok',
    })
  }, [])
  useEffect(() => {
    try {
      axios
        .put('https://bookyou-production.up.railway.app/success', null, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          window.localStorage.setItem('token', res.data.token)
        })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error: error.response.data })
    }
  }, [])

  return (
    <SuccessContainer>
      <CardSuccess>
        <h1>YA ERES PREMIUM </h1>
        <Link to="/home">
          <BtnSuccess>INICIO</BtnSuccess>
        </Link>
      </CardSuccess>
    </SuccessContainer>
  )
}

export default Success
