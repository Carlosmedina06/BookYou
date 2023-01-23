import { Routes, Route } from 'react-router-dom'

import Bookdetail from './components/Bookdetail/Bookdetail'
import { DashBoard } from './components/DashBoard/dashBoard'
import { Home } from './components/Home/home'
import { Usuario } from './components/Usuario/Usuario'
import Landing from './components/Landing/Landing'
import { CreateUser } from './components/CreateUser/CreateUser'
import PageOnConstruction from './components/PageOnConstruction/PageOnConstruction'
import PostBook from './components/FormBookCreate/formBook'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Landing />} path="/" />

        <Route element={<Home />} path="/home" />
        <Route element={<Usuario />} path="/Usuario" />
        <Route element={<CreateUser />} path="/createUser" />
        <Route element={<DashBoard />} path="/dashBoard" />
        <Route element={<Bookdetail />} path="/bookdetail/:id" />
        <Route element={<PostBook />} path="/create/book" />
        <Route element={<PageOnConstruction />} path="/pageonconstruction" />
        <Route element={<PostBook/>} path="createbook" />
      </Routes>
    </div>
  )
}

export default App
