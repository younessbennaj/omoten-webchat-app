import React, { useContext } from 'react';
import Message from '../message/Message';

const MessageList = ({ messages }) => {

    return (
        <div style={{ height: '100%' }}>
            {messages.map((message, i) => {
                return <Message key={i} message={message}></Message>
            })}
        </div>
    );
}

export default MessageList;