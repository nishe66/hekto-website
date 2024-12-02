import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout
