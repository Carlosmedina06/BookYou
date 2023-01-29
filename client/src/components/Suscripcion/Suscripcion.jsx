import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import axios from 'axios'

const Suscripcion = () => {
  const user = useSelector((state) => state.loginUser)
  const dispatch = useDispatch()
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
        .get('http://localhost:3001/checkout', {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          console.log(res)
          window.location.href = res.data.init_point
        })
    }
  }

  return (
    <>
      <h1>ARS 385</h1>
      <p>
        En Bookyou vas a encontrar los últimos estrenos de literatura, originales y clásicos
        inolvidables.
      </p>
      <button onClick={handleSuscribe}>Suscribete Ahora</button>
    </>
  )
}

export default Suscripcion
