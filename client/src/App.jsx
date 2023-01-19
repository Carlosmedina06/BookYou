import {Routes, Route } from 'react-router-dom'
import { DashBoard } from './components/DashBoard/dashBoard'
import { Home } from './components/Home/home'


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/dashBoard' element={<DashBoard/>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App
