import React, { useState } from 'react'
import { addMsg } from '../../features/messageBox/messageBox'
import {useDispatch} from 'react-redux'
import {Send} from 'lucide-react'
function MessageInput() {
  const dispatch = useDispatch()
  const [input,setInput] = useState()
const handleSend = (e)=>{
  e.preventDefault()
  dispatch(addMsg(input))
  

}
  return (
      <form onSubmit={handleSend} className=' rounded-[20px] flex flex-wrap justify-end items-between w-[900px] fixed h-[182px] bg-white border-[20px] 
      top-[450px] left-[380px]
      border-[#001F8B]' >


        <input type='text' placeholder='Enter your text here...........' className=' w-[1014px] text-[#9A9A9A] px-4 pt-1' 
        onChange={(e)=> setInput(e.target.value)} value={input} />
      <button type='submit' className=' mr-6'><Send /></button>
    </form>
  )
}

export default MessageInput