import { Routes, Route } from 'react-router-dom'

import Bookdetail from './components/Bookdetail/Bookdetail'
import { DashBoard } from './components/DashBoard/dashBoard'
import { Home } from './components/Home/home'
import { Usuario } from './components/Usuario/Usuario'
import { CreateUser } from './components/CreateUser/CreateUser'
import PageOnConstruction from './components/PageOnConstruction/PageOnConstruction'
import PostBook from './components/FormBookCreate/formBook'
import Autentication from './components/Autentication/Autentication'
import { AuthProvider } from './context/authContex'
import MainPage from './components/Landing/index'
import NotFound from './components/NotFound/NotFound'
/* import NavbarLayout from './layout/navLayout' */

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route element={<MainPage />} path="/" />
          {/*         <Route element={<NavbarLayout />} path="/home" /> */}
          <Route element={<Home />} path="/home" />
          <Route element={<NotFound />} path="/404" />
          <Route element={<Usuario />} path="/Usuario" />
          <Route element={<CreateUser />} path="/createUser" />
          <Route element={<DashBoard />} path="/dashBoard" />
          <Route element={<Bookdetail />} path="/bookdetail/:id" />
          <Route element={<PostBook />} path="/create/book" />
          <Route element={<PageOnConstruction />} path="/pageonconstruction" />
          <Route element={<PostBook />} path="createbook" />
          <Route element={<Autentication />} path="/login" />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
