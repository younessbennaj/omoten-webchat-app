import React from 'react';
import styled from 'styled-components';
import Box from '../Box';

const size = props => {
    switch (props.size) {
        case 'small':
            return `
          height: 20px;
          width: 20px;
        `;
        case 'medium':
            return `
          height: 30px;
          width: 30px;
        `;
        case 'large':
            return `
          height: 40px;
          width: 40px;
        `;
        default:
            return ``;
    }
};

const StyledAvatar = styled(Box)`
  & {
    position: relative;
    overflow: hidden;
    border-radius: 100%;
    margin: 0px 6px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${'https://api.adorable.io/avatars/46/abott@adorable.png'});
  }

  ${size}
`;

const Avatar = React.forwardRef((props, ref) => (
    <StyledAvatar ref={ref} {...props} />
));

Avatar.defaultProps = {
    size: '30px',
    bg: 'neutral',
    alt: 'Avatar',
};

export default Avatar;