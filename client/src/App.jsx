import { Routes, Route } from 'react-router-dom'

import { DashBoard } from './components/DashBoard/dashBoard'
import { Home } from './components/Home/home'
import { Landing } from './components/Landing/Landing'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Landing />} path='/'/>
        <Route element={<Home />} path="/home" />
        <Route element={<DashBoard />} path="/dashBoard" />
      </Routes>
    </div>
  )
}

export default App
