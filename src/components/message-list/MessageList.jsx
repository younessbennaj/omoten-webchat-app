import React from 'react';
import Message from '../message/Message';
import Box from '../UI/Box';
import styled from 'styled-components';

const StyledMessageList = styled(Box)`
`

const MessageList = ({ messages }) => {

    return (
        <StyledMessageList>
            {messages.map((message, i) => {
                return <Message key={i} message={message}></Message>
            })}
        </StyledMessageList>
    );
}

export default MessageList;