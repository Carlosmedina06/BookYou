import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import axios from 'axios'

import {
  BtnSuscripcion,
  CardSuscripcion,
  ContentSuscripcion,
  SuscripcionContainer,
} from './SuscripcionStyle'

/* const url = 'https://bookyou-production.up.railway.app' */
const urlocal = 'http://localhost:3001'

const Suscripcion = () => {
  const user = useSelector((state) => state.loginUser)
  const navigate = useNavigate()

  useEffect(() => {
    Swal.fire({
      title: 'Pagina en Construccion',
      text: 'El diseño de esta pagina aun esta en proceso',
      icon: 'info',
      confirmButtonText: 'Ok',
    })
  }, [])

  const handleSuscribe = (e) => {
    e.preventDefault()
    if (!user) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Debes iniciar sesión para suscribirte',
        showConfirmButton: false,
        timer: 2000,
      })
      navigate('/login')
    } else {
      axios
        .get(`${urlocal}/checkout`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          window.location.href = res.data.init_point
        })
    }
  }

  return (
    <SuscripcionContainer>
      <CardSuscripcion>
        <ContentSuscripcion>
          <h1>ARS 385</h1>
          <p>
            En Bookyou vas a encontrar los últimos estrenos de literatura, originales y clásicos
            inolvidables.
          </p>
        </ContentSuscripcion>
        <BtnSuscripcion onClick={handleSuscribe}>Suscribete Ahora</BtnSuscripcion>
      </CardSuscripcion>
    </SuscripcionContainer>
  )
}

export default Suscripcion
