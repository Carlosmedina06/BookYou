import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { auth } from '../../utils/FireBase/FireBase'

function Autentication() {
  const logIn = async () => {
    var provider = await new GoogleAuthProvider()

    const res = await signInWithPopup(auth, provider)

    console.log(res)
  }

  return (
    <div>
      <button onClick={logIn}>autenticar con google</button>
    </div>
  )
}

export default Autentication
