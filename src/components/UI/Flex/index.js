import React from 'react';
import Box from '../Box';

const Flex = React.forwardRef((props, ref) => <Box ref={ref} {...props} />);

Flex.defaultProps = {
    display: 'flex',
};

Flex.displayName = 'Flex';

export default Flex;
