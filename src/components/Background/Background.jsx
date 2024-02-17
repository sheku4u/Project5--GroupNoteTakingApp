import React from 'react'
import bgImage from '../../assets/bgImage.png'
import { Link } from 'react-router-dom'
function Background() {
  return (

    <div className=' w-4/5 flex h-full scroll-m-0 justify-between content-end items-center flex-col'>
      
      <img src= {bgImage} alt="" className=' w-6/12 my-8' />
      <h3>Pocket Notes</h3>
      <p className=' w-2/3 mb-8'>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      
      <p className=' mt-40 bottom-5'>🔒 end-to-end encrypted</p>


    </div>
  )
}

export default Background