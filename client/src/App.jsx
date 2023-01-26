
import { Routes, Route } from 'react-router-dom'

import Bookdetail from './components/Bookdetail/Bookdetail'
import { DashBoard } from './components/DashBoard/dashBoard'
import { Home } from './components/Home/home'
import { Usuario } from './components/Usuario/Usuario'
import { CreateUser } from './components/CreateUser/CreateUser'
import PageOnConstruction from './components/PageOnConstruction/PageOnConstruction'
import PostBook from './components/FormBookCreate/formBook'
import MainPage from './components/Landing/index'
import NotFound from './components/NotFound/NotFound'
import MainContainerLayout from './layout/Main-container-layout'
import NavbarLayout from './layout/Nav.layout'
import MainContentLayout from './layout/main-content.layout'
import Login from './components/Login/Login'


function App() {
  return (

      <MainContainerLayout/>
      <NavbarLayout/>
      <MainContentLayout>
      <div className="App">
        <Routes>
          <Route element={<MainPage />} path="/" />
          {/*  <Route element={<NavbarLayout />} path="/home" /> */}
          <Route element={<Home />} path="/home" />
          <Route element={<NotFound />} path="/404" />
          <Route element={<Usuario />} path="/Usuario" />
          <Route element={<CreateUser />} path="/createUser" />
          <Route element={<DashBoard />} path="/dashBoard" />
          <Route element={<Bookdetail />} path="/bookdetail/:id" />
          <Route element={<PostBook />} path="/create/book" />
          <Route element={<PageOnConstruction />} path="/pageonconstruction" />
          <Route element={<PostBook />} path="createbook" />
          {/* <Route element={<Autentication />} path="/login" /> */}
        </Routes>
      </div>
      </MainContentLayout>
  )
}

export default App
