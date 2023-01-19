import { Routes, Route } from 'react-router-dom'

import { DashBoard } from './components/DashBoard/dashBoard'
import { Home } from './components/Home/home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<DashBoard />} path="/dashBoard" />
      </Routes>
    </div>
  )
}

export default App
