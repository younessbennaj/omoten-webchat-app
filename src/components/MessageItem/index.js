import React from 'react';
import { Bubble } from '../UI';
import Carousel from '../Carousel';
import { Flex } from '../UI';

const MessageItem = ({ item: { type, content }, isUser }) => {
    let component;
    if (type === 'text') component = <Bubble>{content}</Bubble>;
    if (type === "carousel") component = <Carousel carousel={content}></Carousel>;
    return (
        <Flex mb={1} justifyContent={isUser ? 'flex-end' : 'flex-start'}>
            {component}
        </Flex>
    );
}

export default MessageItem;