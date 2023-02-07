import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Confetti from 'react-confetti'

import api from '../../utils/axios/axios.js'
import NavBar from '../NavBar/NavBar.jsx'

import { BtnSuccess, CardSuccess, ContentSuccess, SuccessContainer } from './SuccessStyle.js'

const Success = () => {
  const url = useLocation()

  useEffect(() => {
    try {
      if (url.search.includes('status=approved'))
        api
          .put('/success', null, {
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
  }, [url.search])

  return (
    <>
      {url.search.includes('status=approved') ? (
        <>
          <Confetti height={window.innerHeight} width={window.innerWidth} />
          <NavBar />
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
      ) : (
        <>
          <SuccessContainer>
            <CardSuccess>
              <ContentSuccess>
                <h1> Sin autorizacion </h1>
                <p> por favor volver al inicio </p>
                <Link to="/home">
                  <BtnSuccess>INICIO</BtnSuccess>
                </Link>
              </ContentSuccess>
            </CardSuccess>
          </SuccessContainer>
        </>
      )}
    </>
  )
}

export default Success
