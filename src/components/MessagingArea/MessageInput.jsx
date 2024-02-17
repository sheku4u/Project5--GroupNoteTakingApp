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
    <form onSubmit={handleSend}>
      <input type='text' className='' onChange={(e)=> setInput(e.target.value)} value={input} />
      <button type='submit'><Send /></button>
    </form>
  )
}

export default MessageInput