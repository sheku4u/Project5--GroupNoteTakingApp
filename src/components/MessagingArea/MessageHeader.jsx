import React from 'react'
import Listiten from '../ListItem/Listitem'
import { Circle } from 'lucide-react'
function MessageHeader() {
  return (
    <div className=' w-[1078px] bg-[rgb(0,31,139)] fixed top-0 flex flex-wrap justify-start left-[434px] h-[90px] items-center text-4xl text-white'>
      <Circle/> <p className=' pl-[20px]'>my Notes</p>
    </div>
  )
}

export default MessageHeader