import React from 'react';
import MessageItem from '../message-item/MessageItem';
import styled, { ThemeProvider } from 'styled-components';
// import { botTheme, userTheme } from '../../theme';
import Avatar from '../avatar/Avatar';

const InfoLine = styled.div`
    margin: 0 12px;
    flex: 0 1 auto;
    font-size: 12px;
`;

const MessageContainer = styled.div`
`;

const MessageGroupe = styled.div`
    padding-bottom: 8px
`;

const MessageGroupeContainer = styled.div`
    padding: 8px 0; 
`;

const Message = ({ message: { replies, isUser } }) => {
    // const botTheme = {
    //     bubbleColor: '#2196F3',
    //     fontColor: '#fff'
    // };

    // const userTheme = {
    //     bubbleColor: '#fff',
    //     fontColor: '#4a4a4a'
    // };
    return (
        <MessageGroupeContainer>
            <MessageGroupe className={`d-flex ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="d-flex align-items-end mr-2">
                    <Avatar size="30px" />
                </div>
                <MessageContainer className="d-flex flex-column">
                    {!isUser &&
                        <InfoLine className="d-flex">
                            <div>
                                Hotel Digital Assistant
                                </div>
                        </InfoLine>
                    }
                    <div>
                        {replies.map((item, i) => {
                            if (item.type !== 'quickReplies') {
                                return <MessageItem key={i} item={item}></MessageItem>
                            }

                            return null;
                        })}
                    </div>
                </MessageContainer>
            </MessageGroupe>
            <div>
                {replies.map((item, i) => {
                    if (item.type === 'quickReplies') {
                        return <MessageItem key={i} item={item}></MessageItem>
                    }

                    return null;
                })}

            </div>
        </MessageGroupeContainer>
    )
}

export default Message;