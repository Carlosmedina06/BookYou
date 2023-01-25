import React from 'react'
import { Outlet } from 'react-router-dom'

import NavBar from '../components/NavBar/NavBar'

const NavbarLayout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default NavbarLayout
