import React from 'react';
import Box from '../Box';

const Image = React.forwardRef((props, ref) => <Box ref={ref} {...props} />);

Image.defaultProps = {
    as: 'img',
    maxWidth: '100%',
    height: 'auto',
};

Image.displayName = 'Image';

export default Image;
