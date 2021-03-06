import React from 'react';
import styled from 'styled-components';
import { COMMON, LAYOUT, POSITION, BORDERS, TYPOGRAPHY } from '../utils/constants';

const StyledBubble = styled.div`
    display: inline-block;
    width: auto;
    max-width: 75%;
    ${COMMON}
    ${LAYOUT}
    ${POSITION}
    ${BORDERS}
    ${TYPOGRAPHY}

    > span.bubble-text {
        font-size: 14px;
    }
`;

StyledBubble.defaultProps = {
    m: 0,
    px: 3,
    py: 3,
    position: 'relative',
    color: 'black',
    bg: 'white',
    primaryColor: 'primary',
    whiteColor: 'white',
    border: 'none',
};

const BubbleBody = ({ children }) => {
    return <span className='bubble-text' children={children} />;
};

const Bubble = React.forwardRef(
    ({ children, ...props }, ref) => {
        return (
            <StyledBubble {...props} ref={ref}>
                <BubbleBody children={children} />
            </StyledBubble>
        );
    }
);

Bubble.defaultProps = {
    ...StyledBubble.defaultProps,
    borderRadius: 3,
    boxShadow: 'medium',
};

export default Bubble;



