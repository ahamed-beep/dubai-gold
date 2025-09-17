import React from 'react'
import Home from './Components/Home'
import Mainsection from './Components/Mainsection'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLogin from './Components/Login'
import AdminDashboard from './Components/Admin/AdminDashboard'
import CombineDashboard from './Components/Admin/CombineDashboard'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  element={<Mainsection/>}  path='/'  />
        <Route element={<AdminLogin/>} path='/login'  />
        <Route element={<CombineDashboard/>} path='/admin-dashboard'  />


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App