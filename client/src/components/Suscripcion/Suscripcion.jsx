import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'


import api from '../../utils/axios/axios.js'

import NavBar from '../NavBar/NavBar'

import {
  BtnSuscripcion,
  CardSuscripcion,
  ContentSuscripcion,
  SuscripcionContainer,
  ContentChecks,
  SuscriptionBanner,
  SuscriptionBannerText,
  SuscriptionBannerTitle,
  SuscripcionBannerTextSide,
  SuscriptionBannerImg

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
      api
        .get('/checkout', {
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
      <SuscriptionBanner>
        
        <SuscripcionBannerTextSide>
        <SuscriptionBannerTitle>
        SUSCRIBETE A BOOKYOU
        </SuscriptionBannerTitle>
      <SuscriptionBannerText>
         
        Accede a un ampio catalogo
               de libros

      </SuscriptionBannerText>
        </SuscripcionBannerTextSide>
        <SuscriptionBannerImg>
          <img src="https://res.cloudinary.com/dn8jxsqka/image/upload/v1675757159/undraw_reading_time_re_phf7_fapbqg.svg" alt="" />
        </SuscriptionBannerImg>


      </SuscriptionBanner>
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
