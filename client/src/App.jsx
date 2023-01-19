import {Routes, Route } from 'react-router-dom'
import Bookdetail from './components/Bookdetail/Bookdetail'
import Test from './components/Bookdetail/test'
import { DashBoard } from './components/DashBoard/dashBoard'
import { Home } from './components/Home/home'


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashBoard' element={<DashBoard/>}/>
        <Route path='/bookdetail/:id'  element={<Bookdetail/>} />
        <Route path="/test" element={<Test/>} />
       </Routes>
    </div>
  )
}

export default App
