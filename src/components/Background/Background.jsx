import React from 'react'
import bgImage from '../../assets/bgImage.png'
import { Link } from 'react-router-dom'
function Background() {
  return (

    <div className=' w-[1077px] flex h-full scroll-m-0 justify-between content-end items-center flex-col'>
      
      <img src= {bgImage} alt="" className=' w-[626px] my-8' />
      <h3 className=' w-[313px]'>Pocket Notes</h3>
      <p className=' w-[650px] mb-8'>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      
      <p className=' mt-14  w-[217px]'>🔒 end-to-end encrypted</p>


    </div>
  )
}

export default Background