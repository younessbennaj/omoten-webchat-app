import React from 'react';
import styled from 'styled-components';
import Bubble from '../bubble/Bubble';
import QuickReplies from '../quick-replies/QuickReplies';
import Carousel from '../carousel/Carousel';

const MessageWraper = styled.div`
    margin-bottom: 2px;
`;

const MessageItem = ({ item: { type, content, isUser } }) => {
    let component;
    if (type === 'text') component = <Bubble content={content}></Bubble>;
    if (type === "quickReplies") component = <QuickReplies quickReplies={content}></QuickReplies>;
    if (type === "carousel") component = <Carousel carousel={content}></Carousel>;

    return (
        <MessageWraper>
            {component}
        </MessageWraper>
    );
}

export default MessageItem;