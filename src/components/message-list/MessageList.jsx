import React from 'react';
import Message from '../message/Message';
import Box from '../UI/Box';

const MessageList = ({ messages }) => {

    return (
        <Box>
            {messages.map((message, i) => {
                return <Message key={i} message={message}></Message>
            })}
        </Box>
    );
}

export default MessageList;