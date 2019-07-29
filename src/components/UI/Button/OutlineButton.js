import React from 'react';
import styled from 'styled-components';

import { ButtonBody } from './Button';
import SolidButton, { StyledSolidButton } from './SolidButton';

const StyledOutlineButton = styled(StyledSolidButton)`
    & {
        color: var(--primary-color);
        background: transparent;
    }

    &:hover {
        border-color: var(--primary-color);
    }

    &:hover::before {
        opacity: 0;
    }

    &:active::before {
        opacity: 0.1;
    }

    &::before {
        opacity: 0;
    }
`;

const OutlineButton = React.forwardRef(
    ({ children, ...props }, ref) => {
        return (
            <StyledOutlineButton {...props} ref={ref}>
                <ButtonBody children={children} />
            </StyledOutlineButton>
        );
    }
);

OutlineButton.defaultProps = {
    ...SolidButton.defaultProps,
    border: 1,
    borderColor: 'primary',
    boxShadow: 0,
};
export { StyledOutlineButton };
export default OutlineButton;

