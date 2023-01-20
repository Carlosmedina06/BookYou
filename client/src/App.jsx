import { Routes, Route } from 'react-router-dom'

import Bookdetail from './components/Bookdetail/Bookdetail'
import { DashBoard } from './components/DashBoard/dashBoard'
import { Home } from './components/Home/home'
import Landing from './components/Landing/Landing'
import { CreateUser } from './components/CreateUser/CreateUser'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Landing />} path="/" />

        <Route element={<Home />} path="/home" />
        <Route element={<CreateUser />} path="/createUser" />
        <Route element={<DashBoard />} path="/dashBoard" />
        <Route element={<Bookdetail />} path="/bookdetail/:id" />
      </Routes>
    </div>
  )
}

export default App
