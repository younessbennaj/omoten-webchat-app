import React from 'react';
import styled from 'styled-components';
import { get } from '../utils/constants';

import { ButtonBody } from './Button';
import OutlineButton, { StyledOutlineButton } from './OutlineButton';

const StyledQuickReply = styled(StyledOutlineButton)`
    cursor: auto;
    &:hover {
        color: ${get('colors.white')};
        box-shadow: none;
        background-color: ${get('colors.primary')};
    }
`;

const QuickReply = React.forwardRef(
    ({ children, ...props }, ref) => {
        return (
            <StyledQuickReply {...props} ref={ref}>
                <ButtonBody children={children} />
            </StyledQuickReply>
        );
    }
);

QuickReply.defaultProps = {
    ...OutlineButton.defaultProps,
    borderRadius: '6px',
    p: '10px'
};

export default QuickReply;