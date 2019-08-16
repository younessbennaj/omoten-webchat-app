import React from 'react';
import Box from '../Box';

const Card = React.forwardRef((props, ref) => <Box ref={ref} {...props} />);

Card.defaultProps = {
    position: 'relative',
    bg: 'white',
    border: 1,
    borderRadius: 1,
    borderColor: 'neutral',
    boxShadow: 'medium',
    p: 4,
    width: 1,
    minWidth: 1,
    height: 'auto',
    minHeight: 1,
};

Card.displayName = 'Card';

export default Card;