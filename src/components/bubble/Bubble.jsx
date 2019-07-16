import React, { PureComponent } from 'react';
import styled from 'styled-components';
import BubbleContainer from './BubbleContainer';

const Paragraph = styled.p`
    display: block;
    font-size: 16px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const Bubble = ({ bubble: { text, isUser } }) => {
    return (
        <BubbleContainer isUser={isUser} className="shadow-sm d-block">
            <Paragraph>
                {text}
            </Paragraph>
        </BubbleContainer>
    );
}

export default Bubble;