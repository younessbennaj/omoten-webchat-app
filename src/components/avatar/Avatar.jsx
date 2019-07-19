import React from 'react';
import styled from 'styled-components';

const AvatarImage = styled.img`
        padding: 6px;
        height:  ${({ size }) => size};
        width:  ${({ size }) => size}};
    `;

const Avatar = ({ size }) => {
    return (
        <AvatarImage size={size} className="rounded-circle shadow-sm ml-2" src="https://api.adorable.io/avatars/46/abott@adorable.png" />
    );
}

export default Avatar;