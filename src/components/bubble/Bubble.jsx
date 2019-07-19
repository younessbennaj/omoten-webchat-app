import React from 'react';
import styled from 'styled-components';
import BubbleContainer from './BubbleContainer';

const Paragraph = styled.p`
    margin: 0;
    display: block;
    font-size: 16px;
`;

const Bubble = ({ content }) => {
    return (
        <BubbleContainer className="shadow-sm d-inline-block">
            <Paragraph>
                {content}
            </Paragraph>
        </BubbleContainer>
    );
}

export default Bubble;