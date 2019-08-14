import React from 'react';
import styled from 'styled-components';
import { get } from '../utils/constants';
import { theme } from '../../../theme';

import {
    COMMON,
    LAYOUT,
    POSITION,
    FLEX,
    BORDERS,
    TYPOGRAPHY,
} from '../utils/constants';

const StyledInput = styled.input`
& {
    appearance: none;
    box-sizing: border-box;
  }

  &:focus {
    outline: none;
    border-color: ${get('colors.primary')};
  }

  ${COMMON}
  ${LAYOUT}
  ${POSITION}
  ${FLEX}
  ${BORDERS}
  ${TYPOGRAPHY}
`

const Input = React.forwardRef((props, ref) => {
    return <StyledInput {...props} ref={ref} />;
});

const defaultProps = {
    theme,
    color: 'bodyColor',
    bg: 'white',
    lineHeight: 'default',
    height: '3rem',
    p: 3,
    border: 1,
    borderColor: 'neutral',
    borderRadius: 1,
    boxShadow: 'medium',
};

Input.defaultProps = defaultProps;
StyledInput.defaultProps = defaultProps;

Input.displayName = 'Input';

export { StyledInput };

export default Input;