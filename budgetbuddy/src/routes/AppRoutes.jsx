import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegistrationPage from '../pages/RegistrationPage'
import Dashboard from '../components/Dashboard/Dashboard'

function AppRoutes() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}>
            <Route path='/dashboard' element ={<Dashboard/>} />
      </Route>
        
      <Route path='/Login' element={<LoginPage/>}></Route>
      <Route path='/Registration' element={<RegistrationPage/>}></Route>
    </Routes>
    </>
  )
}

export default AppRoutes
