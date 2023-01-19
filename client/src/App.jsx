
import {Routes, Route } from 'react-router-dom'
import Bookdetail from './components/Bookdetail/Bookdetail'
import { DashBoard } from './components/DashBoard/dashBoard'
import { Home } from './components/Home/home'
import { Landing } from './components/Landing/Landing'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Landing/>} path="/"/>
        <Route element={<Home />} path="/home" />
        <Route element={<DashBoard />} path="/dashBoard" />
        <Route path='/bookdetail/:id'  element={<Bookdetail/>}/>
       </Routes>


    </div>
  )
}

export default App
