import React from 'react';
import styled from 'styled-components';
import Bubble from '../bubble/Bubble';
import QuickReplies from '../quick-replies/QuickReplies';
import Carousel from '../carousel/Carousel';

const Avatar = styled.img`
        padding: 6px;
        height: 46px;
        width: 46px;
    `;

const MessageItem = ({ item: { type, content, isUser } }) => {
    let component;
    if (type === 'text') component = <Bubble bubble={content}></Bubble>;
    if (type === "quickReplies") component = <QuickReplies quickReplies={content}></QuickReplies>;
    if (type === "carousel") component = <Carousel carousel={content}></Carousel>;

    return (
        <div className="d-flex flex-row">
            <div className="d-flex align-items-end mr-2">
                <Avatar className="rounded-circle shadow-sm ml-2" src="https://api.adorable.io/avatars/46/abott@adorable.png" />
            </div>
            {component}
        </div>

    );
    // if (type === "quickReplies") return <QuickReplies quickReplies={content}></QuickReplies>
    // if (type === "carousel") return <Carousel carousel={content}></Carousel>
}

export default MessageItem;