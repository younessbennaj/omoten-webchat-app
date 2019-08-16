import React from 'react';
import Message from '../Message';
import styled from 'styled-components';
import { Box } from '../UI'

const StyledMessageList = styled(Box)`
`

StyledMessageList.defaultProps = {
    width: '100%'
}

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