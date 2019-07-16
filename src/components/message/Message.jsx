import React from 'react';
import MessageItem from '../message-item/MessageItem';

const Message = ({ message }) => {
    return (
        <div>
            {message.map(item => {
                return <MessageItem item={item}></MessageItem>
            })}
        </div>
    )
}

export default Message;