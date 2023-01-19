
import {Routes, Route } from 'react-router-dom'
import Bookdetail from './components/Bookdetail/Bookdetail'
import { DashBoard } from './components/DashBoard/dashBoard'
import { Home } from './components/Home/home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route path='/dashBoard' element={<DashBoard/>}/>
        <Route path='/bookdetail/:id'  element={<Bookdetail/>} />
       </Routes>
      </Routes>

    </div>
  )
}

export default App
