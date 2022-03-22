import React from 'react';

const Messages = ({ message }) => {
  return (
    <div>
      {message.body}
      {message.sender}
    </div>
  )
}

export default Messages;