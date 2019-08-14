import React from 'react';
import styled from 'styled-components';
import { Bubble } from '../UI';
import QuickReplies from '../QuickReplies';
import Carousel from '../Carousel';
import { Flex } from '../UI';

const MessageItem = ({ item: { type, content }, isUser }) => {
    let component;
    if (type === 'text') component = <Bubble>{content}</Bubble>;
    if (type === "quickReplies") component = <QuickReplies content={content}></QuickReplies>;
    if (type === "carousel") component = <Carousel carousel={content}></Carousel>;
    return (
        <Flex mb={1} justifyContent={isUser ? 'flex-end' : 'flex-start'}>
            {component}
        </Flex>
    );
}

export default MessageItem;