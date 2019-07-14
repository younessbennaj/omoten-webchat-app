import React from 'react';
import Bubble from '../bubble/Bubble';
import QuickReplies from '../quick-replies/QuickReplies';
import Carousel from '../carousel/Carousel';

const MessageItem = ({ message: { type, content, isUser } }) => {
    if (type === 'text') return <Bubble bubble={content}></Bubble>;
    if (type === "quickReplies") return <QuickReplies quickReplies={content}></QuickReplies>
    if (type === "carousel") return <Carousel carousel={content}></Carousel>
}

export default MessageItem;