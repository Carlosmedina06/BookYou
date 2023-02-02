import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import axios from 'axios'

import NavBar from '../NavBar/NavBar'

import {
  BtnSuscripcion,
  CardSuscripcion,
  ContentSuscripcion,
  SuscripcionContainer,
  ContentChecks,
} from './SuscripcionStyle'

const Suscripcion = () => {
  const user = useSelector((state) => state.loginUser)
  const navigate = useNavigate()

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
        .get('https://server-bookyou.onrender.com/checkout', {
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
    <>
      <NavBar />
      <SuscripcionContainer>
        <CardSuscripcion>
          <ContentSuscripcion>
            <h1>PREMIUM</h1>
            <h2>ARS $385</h2>
            <p>
              En Bookyou vas a encontrar los últimos estrenos de literatura, originales y clásicos
              inolvidables.
            </p>
            <ContentChecks>
              <ul>
                <li>
                  <span>✓</span> Acceder a toda la colección de libros.
                </li>
                <li>
                  <span>✓</span> Compartir libros premium.
                </li>
                <li>
                  <span>✓</span> Descargar libros premium.
                </li>
              </ul>
            </ContentChecks>
          </ContentSuscripcion>
          <BtnSuscripcion onClick={handleSuscribe}>Suscribete Ahora</BtnSuscripcion>
        </CardSuscripcion>
      </SuscripcionContainer>
    </>
  )
}

export default Suscripcion
