import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegistrationPage from '../pages/RegistrationPage'

function AppRoutes() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
        
      <Route path='/Login' element={<LoginPage/>}></Route>
      <Route path='/Registration' element={<RegistrationPage/>}></Route>
    </Routes>
    </>
  )
}

export default AppRoutes
