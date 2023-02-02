import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Confetti from 'react-confetti'

import Navbar from '../Navbar/Navbar.jsx'

import { BtnSuccess, CardSuccess, ContentSuccess, SuccessContainer } from './SuccessStyle.js'

const Success = () => {
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
    <>
      <Confetti height={window.innerHeight} width={window.innerWidth} />
      <Navbar />
      <SuccessContainer>
        <CardSuccess>
          <ContentSuccess>
            <h1>Feliciades ya eres un usuario premium</h1>
            <p> Gracias por unirte a la comunidad </p>
            <Link to="/home">
              <BtnSuccess>INICIO</BtnSuccess>
            </Link>
          </ContentSuccess>
        </CardSuccess>
      </SuccessContainer>
    </>
  )
}

export default Success
