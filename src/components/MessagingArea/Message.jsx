import React from 'react'
import MessageInput from './MessageInput'
import {useSelector} from 'react-redux'
import MessageHeader from './MessageHeader'
function Message() {
  const messages = useSelector(state => state.msgBox.msgBox)
  return (
    <div>
      <MessageHeader />
      {
        messages.map((msg)=> (<li className='' key={msg.id}>{msg.text}</li>))
      }
      <MessageInput />
    </div>
  )
}

export default Message