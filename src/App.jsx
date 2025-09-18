import React from 'react'
import Mainsection from './Components/Mainsection'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLogin from './Components/Login'
import AdminDashboard from './Components/Admin/AdminDashboard'
import CombineDashboard from './Components/Admin/CombineDashboard'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
         <ToastContainer
        position="top-center"   // 👈 center me aayega
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
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