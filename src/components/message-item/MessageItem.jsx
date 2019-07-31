import React from 'react';
import styled from 'styled-components';
import { Bubble } from '../UI';
import QuickReplies from '../QuickReplies';
import Carousel from '../Carousel';
import { Box } from '../UI';

const MessageItem = ({ item: { type, content, isUser } }) => {
    let component;
    if (type === 'text') component = <Bubble>{content}</Bubble>;
    if (type === "quickReplies") component = <QuickReplies content={content}></QuickReplies>;
    if (type === "carousel") component = <Carousel carousel={content}></Carousel>;

    return (
        <Box mb={1}>
            {component}
        </Box>
    );
}

export default MessageItem;