import React from 'react'
function Circle({text,color}) {

  return (
    <div className={`rounded-full bg-[${color}] py-3 px-2 text-white font-medium uppercase`}>
      <p>{text}</p>
    </div>
    
  )
}

export default Circle