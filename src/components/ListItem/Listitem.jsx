import React, { useState } from 'react'
import Circle from '../Circles/Circle'
import Message from '../MessagingArea/Message'
function Listitem({
    text,
    className,
    color

}) {
  const [showMsg,SetShowMsg] = useState(false)


  return (
    <div className=' flex gap-2' onClick={()=> SetShowMsg(!showMsg)}>
      <Circle className='' />
       <li className={`text-xl font-medium mb-4  ${className}`}>{text}</li>
       {showMsg && <Message />}
    </div>
   
  )
}

export default Listitem