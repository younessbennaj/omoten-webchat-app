import React from 'react';
import styled from 'styled-components';
import { opacity } from 'styled-system';
import { COMMON, LAYOUT, POSITION, FLEX, BORDERS } from '../utils/constants';

const StyledBox = styled.div`
  & {
    box-sizing: border-box;
  }
  ${COMMON}
  ${LAYOUT}
  ${POSITION}
  ${FLEX}
  ${BORDERS}
  ${opacity}
`;

const Box = React.forwardRef((props, ref) => (
    <StyledBox ref={ref} {...props} />
));

Box.displayName = 'Box';

export default Box;