import React from 'react'
import { useParams } from 'react-router-dom'

const Chat = () => {
    const params = useParams()
  return (
    <div>{params}</div>
  )
}

export default Chat