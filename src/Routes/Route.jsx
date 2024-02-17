import React from 'react'
import {Outlet} from 'react-router-dom'
import Background from '../components/Background/Background'
import Navbar from '../components/Navbar/Navbar'

function Locate() {
  return (
    <>
    <Background />
    <Outlet />
    <Navbar />
    </>
  )
}

export default Locate