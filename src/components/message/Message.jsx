import React from 'react';
import MessageItem from '../message-item/MessageItem';
import styled, { ThemeProvider } from 'styled-components';
import { botTheme, userTheme } from '../../theme';


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
    padding: 8px 0;
`;
const MessageGroupe = styled.div`
`
const MessageGroupeContainer = styled.div`
`


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
        <ThemeProvider theme={isUser ? userTheme : botTheme}>
            <MessageGroupeContainer>
                <MessageGroupe className={`d-flex ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className="d-flex align-items-end mr-2">
                        <Avatar className="rounded-circle shadow-sm ml-2" src="https://api.adorable.io/avatars/46/abott@adorable.png" />
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
                            })}
                        </div>
                    </MessageContainer>
                </MessageGroupe>
                <div>
                    {replies.map((item, i) => {
                        if (item.type === 'quickReplies') {
                            return <MessageItem key={i} item={item}></MessageItem>
                        }
                    })}

                </div>
            </MessageGroupeContainer>
        </ThemeProvider>
    )
}

export default Message;