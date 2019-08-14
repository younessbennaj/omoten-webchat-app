import React from 'react';
import MessageItem from '../message-item/MessageItem';
import styled, { ThemeProvider } from 'styled-components';
import Avatar from '../UI/Avatar';
import { Box, Flex } from '../UI';

const InfoLine = styled.div`
    margin: 0 12px;
    flex: 0 1 auto;
    font-size: 12px;
`;

const Message = ({ message: { replies, isUser } }) => {
    return (
        <Box pb='16px'>
            {/* <Box display="flex" flexDirection={isUser ? 'row-reverse' : 'row'}>
                {!isUser &&
                    <Box
                        position="absolute"
                        left='0'
                        bottom='10px'
                    >
                        <Avatar size="medium" />
                    </Box>
                }
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
            </Box> */}
            <Box
                position="relative"
                paddingLeft="54px"
            >
                {!isUser &&
                    <Box
                        position="absolute"
                        left='0'
                        bottom='10px'
                    >
                        <Avatar size="medium" />
                    </Box>
                }

                {replies.map((item, i) => {
                    if (item.type !== 'quickReplies') {
                        return <MessageItem isUser={isUser} key={i} item={item}></MessageItem>
                    }

                    return null;
                })}
            </Box>
            <Box
                position="relative"
            >
                {replies.map((item, i) => {
                    if (item.type === 'quickReplies') {
                        return <MessageItem isUser={isUser} key={i} item={item}></MessageItem>
                    }

                    return null;
                })}

            </Box>
        </Box>
    )
}

export default Message;