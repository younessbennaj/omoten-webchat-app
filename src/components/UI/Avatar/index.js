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
          height: 60px;
          width: 60px;
          line-height: 60px;
        `;
        default:
            return ``;
    }
};

const StyledAvatar = styled(Box)`
  & {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    overflow: hidden;
    border-radius: 100%;
    margin: 0px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${'https://source.unsplash.com/rDEOVtE7vOs/60x60'});
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