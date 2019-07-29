import React from 'react';
import styled from 'styled-components';

import { ButtonBody } from './Button';
import OutlineButton, { StyledOutlineButton } from './OutlineButton';

const StyledQuickReply = styled(StyledOutlineButton)`
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
    borderRadius: 5,
};

export default QuickReply;