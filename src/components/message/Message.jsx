import React from 'react';
import MessageItem from '../message-item/MessageItem';
import styled from 'styled-components';

const Avatar = styled.img`
        padding: 6px;
        height: 30px;
        width: 30px;
    `;

const InfoLine = styled.div`
    margin: 0 12px;
    flex: 0 1 auto;
    font-size: 12px;
`;
const MessageContainer = styled.div`
`;
const MessageGroupe = styled.div`
`
const MessageGroupeContainer = styled.div`
`


const Message = ({ message }) => {
    return (
        <MessageGroupeContainer>
            <MessageGroupe className="d-flex flex-row">
                <div className="d-flex align-items-end mr-2">
                    <Avatar className="rounded-circle shadow-sm ml-2" src="https://api.adorable.io/avatars/46/abott@adorable.png" />
                </div>
                <MessageContainer className="d-flex flex-column">
                    <InfoLine className="d-flex">
                        <div>
                            Hotel Digital Assistant
                        </div>
                    </InfoLine>
                    {message.map(item => {
                        if (item.type !== 'quickReplies') {
                            return <MessageItem item={item}></MessageItem>
                        }
                    })}
                </MessageContainer>
            </MessageGroupe>
            <div>
                {message.map(item => {
                    if (item.type === 'quickReplies') {
                        return <MessageItem item={item}></MessageItem>
                    }
                })}
            </div>
        </MessageGroupeContainer>
    )
}

export default Message;