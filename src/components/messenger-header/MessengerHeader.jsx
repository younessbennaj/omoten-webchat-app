import React from 'react';
import styled from 'styled-components';
import Avatar from '../UI/Avatar';
import { FaTimes } from "react-icons/fa";
import Card from '../UI/Card';
import Box from '../UI/Box';

const ClosingButton = styled.button`
    margin-right: 22px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;
    border-radius: 100%;
    width: 35px;
    height: 35px;
    font-size: 18px;
    color: ${({ theme }) => theme.color};
`;

const MessengerHeader = () => {
    return (
        <Card height={60} display="flex" alignItems='center' justifyContent='space-between'>
            <Box display="flex" alignItems='center'>
                <Avatar size="medium" />
                <div>
                    <div style={{ 'paddingLeft': '10px' }}>Hotel Digital Assistant</div>
                </div>
            </Box>
            <ClosingButton>
                <FaTimes />
            </ClosingButton>
        </Card>
    );
}

export default MessengerHeader;