import React from 'react';
import MessageItem from '../message-item/MessageItem';
import styled, { ThemeProvider } from 'styled-components';
import Avatar from '../UI/Avatar';
import Box from '../UI/Box';

const InfoLine = styled.div`
    margin: 0 12px;
    flex: 0 1 auto;
    font-size: 12px;
`;

const Message = ({ message: { replies, isUser } }) => {
    return (
        <Box my={2}>
            <Box pb={2} display="flex" flexDirection={isUser ? 'row-reverse' : 'row'}>
                <Box display="flex" alignItems='flex-end'>
                    <Avatar size="small" />
                </Box>
                <Box display="flex" flexDirection="column">
                    {!isUser &&
                        <InfoLine className="d-flex">
                            <div>
                                Hotel Digital Assistant
                                </div>
                        </InfoLine>
                    }
                    <Box display="flex" flexDirection="column" alignItems='flex-end' alignItems={isUser ? 'flex-end' : 'flex-start'}>
                        {replies.map((item, i) => {
                            if (item.type !== 'quickReplies') {
                                return <MessageItem key={i} item={item}></MessageItem>
                            }

                            return null;
                        })}
                    </Box>
                </Box>
            </Box>
            <Box>
                {replies.map((item, i) => {
                    if (item.type === 'quickReplies') {
                        return <MessageItem key={i} item={item}></MessageItem>
                    }

                    return null;
                })}

            </Box>
        </Box>
    )
}

export default Message;