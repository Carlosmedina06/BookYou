import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { anyComments } from './Prueba'

/* import { anyComments } from './Prueba' */

const PruebaRate = () => {
  const dispatch = useDispatch()
  const libros = useSelector((state) => state.allBooks)

  console.log('libros', libros)

  useEffect(() => {
    ;(async () => {
      const rate = await anyComments()

      console.log('soy rate:', rate)
    })()
  }, [libros])

  return (
    <div>
      <div> Prueba</div>
    </div>
  )
}

export default PruebaRate
