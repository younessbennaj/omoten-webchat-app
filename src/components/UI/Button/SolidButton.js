import React from 'react';
import styled from 'styled-components';
import Button, { ButtonBody } from './Button';

const StyledSolidButton = styled(Button)`
& {
    color: var(--white-color);
    background: #FFF;
    position: relative;
    z-index: 0;
    transition: all 0.15s ease;
  }

  &:focus {
      outline: 0px;
  }

  &:hover {
    text-decoration: inherit;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:hover::before {
    opacity: 0.9;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    background: var(--primary-color);
    pointer-events: none;
  }
`;

const SolidButton = React.forwardRef(
    ({ children, ...props }, ref) => {
        return (
            <StyledSolidButton {...props} ref={ref}>
                <ButtonBody children={children} />
            </StyledSolidButton>
        );
    }
);

SolidButton.defaultProps = {
    ...Button.defaultProps,
    borderRadius: 2,
    boxShadow: 'medium',
};

export { StyledSolidButton };

export default SolidButton;