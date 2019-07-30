import React from 'react';
import styled from 'styled-components';
import { display } from 'styled-system';
import { COMMON, TYPOGRAPHY } from '../utils/constants';
import Box from '../Box';

export const caps = props =>
    props.caps ? { textTransform: 'uppercase' } : null;

export const italic = props => (props.italic ? { fontStyle: 'italic' } : null);

const StyledText = styled(Box)`
  ${TYPOGRAPHY}
  ${COMMON}
  ${display}

  ${caps}
  ${italic}
`;

const Text = React.forwardRef((props, ref) => (
    <StyledText ref={ref} {...props} />
));

Text.defaultProps = {
    color: 'bodyColor',
    fontSize: 2,
    fontWeight: 'light',
    lineHeight: 'default',
    textAlign: 'left',
};

Text.displayName = 'Text';

Text.span = props => <Text {...props} />;
Text.span.defaultProps = {
    ...Text.defaultProps,
    as: 'span',
};

Text.p = props => <Text {...props} />;
Text.p.defaultProps = {
    ...Text.defaultProps,
    as: 'p',
};

Text.s = props => <Text {...props} />;
Text.s.defaultProps = {
    ...Text.defaultProps,
    as: 's',
};

export default Text;
