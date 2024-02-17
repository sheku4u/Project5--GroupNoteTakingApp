import { useState } from 'react'

import './App.css'
import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar'
function App() {
  
  return (
    <>
      <div className=' w-full flex flex-row'>
        <Navbar />
        <Background />
      </div>
    </>
  )
}

export default App
