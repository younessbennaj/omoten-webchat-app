import React from 'react';
import { buttonStyle, variant, style } from 'styled-system';
import styled from 'styled-components';
import { COMMON, LAYOUT, POSITION, BORDERS, TYPOGRAPHY } from '../utils/constants';

//Variant allow us to create a custom style utility that maps props to style objects in a theme

const buttonSize = variant({
    prop: 'size',
    key: 'buttonSizes',
});

const primaryColor = style({
    prop: 'primaryColor',
    cssProperty: '--primary-color',
    key: 'colors',
});

const whiteColor = style({
    prop: 'whiteColor',
    cssProperty: '--white-color',
    key: 'colors',
});

const StyledButton = styled('button')`
    text-decoration: none;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    > span.button-text {
        display: inline-flex;
        position: relative;
        z-index: 1;
        user-select: none;
        pointer-events: none;
    }

    ${COMMON}
    ${LAYOUT}
    ${POSITION}
    ${BORDERS}
    ${TYPOGRAPHY}

    ${primaryColor}
    ${whiteColor}
    ${buttonStyle}
    ${buttonSize}
`;

const ButtonBody = ({ children }) => {
    return <span className='button-text' children={children} />;
};

const Button = React.forwardRef((props, ref) => {
    return <StyledButton {...props} ref={ref} />;
});

Button.defaultProps = {
    height: '3rem',
    minWidth: '3rem',
    m: 0,
    px: 4,
    py: 0,
    fontWeight: 'bold',
    color: 'white',
    bg: 'neutral',
    primaryColor: 'primary',
    whiteColor: 'white',
    border: 'none',
};

export { StyledButton, ButtonBody };

export default Button;