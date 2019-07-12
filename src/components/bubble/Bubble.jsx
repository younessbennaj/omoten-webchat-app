import React, { PureComponent } from 'react';
import BubbleContainer from './BubbleContainer';

const Bubble = ({ bubble: { text, isUser } }) => {
    return (
        <BubbleContainer isUser={isUser} className="shadow-sm p-3 d-inline-block">
            {text}
        </BubbleContainer>
    );
}

export default Bubble;