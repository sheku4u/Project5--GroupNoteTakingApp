import React from 'react'
import { useState } from 'react'
function BgColorRadioBtn({className}) {
const [ color,setColor] = useState("")

  return (
    <div className={` flex gap-4 ${className} `}>
        <button onClick={()=> setColor('my-color1')} className=' rounded-full  px-3 bg-[#B38BFA] text-[#B38BFA] py-1'>..</button>

        <button onClick={()=> setColor('my-color2')} className=' rounded-full  px-3 bg-[#FF79F2] text-[#FF79F2] py-1'>..</button>

        <button onClick={()=> setColor('my-color3')} className=' rounded-full  px-3 bg-[#43E6FC] text-[#43E6FC] py-1'>..</button>

        <button onClick={()=> setColor("my-color4")} className=' rounded-full  px-3 bg-[#F19576] text-[#F19576] py-1'>..</button>

        <button onClick={()=> setColor("my-color5")} className=' rounded-full  px-3 bg-[#0047FF] text-[#0047FF] py-1'>..</button>

        <button onClick={()=> setColor("my-color6")} className=' rounded-full  px-3 bg-[#6691FF] text-[#6691FF] py-1'>..</button>
        
        
    </div>
  )
}

export default BgColorRadioBtn