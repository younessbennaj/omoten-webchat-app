import React from 'react';
import MessageItem from '../message-item/MessageItem';
import styled from 'styled-components';

const Avatar = styled.img`
        padding: 6px;
        height: 46px;
        width: 46px;
    `;

const MessageContainer = styled.div`
`;


const Message = ({ message }) => {
    return (
        <div className="d-flex flex-row">
            <div className="d-flex align-items-end mr-2">
                <Avatar className="rounded-circle shadow-sm ml-2" src="https://api.adorable.io/avatars/46/abott@adorable.png" />
            </div>
            <MessageContainer className="d-flex flex-column">
                {message.map(item => {
                    return <MessageItem item={item}></MessageItem>
                })}
            </MessageContainer>
        </div>
    )
}

export default Message;