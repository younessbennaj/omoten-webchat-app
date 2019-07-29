import React from 'react';
import styled from 'styled-components';
import { COMMON, LAYOUT, POSITION, BORDERS, TYPOGRAPHY, get } from '../utils/constants';

const StyledBubble = styled.div`
    display: inline-block;
    ${COMMON}
    ${LAYOUT}
    ${POSITION}
    ${BORDERS}
    ${TYPOGRAPHY}
`;

StyledBubble.defaultProps = {
    m: 0,
    px: 3,
    py: 3,
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



