import React from 'react';
import styled from 'styled-components';
import { FaTimes } from "react-icons/fa";
import { Box, Avatar, Heading, Text } from '../UI';

//MessengerHeader Definition and Style

const MessengerHeaderContainer = styled(Box)({
    position: 'relative',
    height: '114px',
    minHeight: '75px',
    color: 'white',
    bg: 'primary'
})

MessengerHeaderContainer.defaultProps = {
    bg: 'primary'
};

//HeaderContent Definition and style

const HeaderContentContainer = styled(Box)({
    position: 'absolute',
    top: '0',
    right: '0',
    left: '0',
    padding: '30px 30px 24px 75px'
})

const HeaderContent = () => {
    return (
        <HeaderContentContainer>
            <Box
                display='table-cell'
                position='relative'
            >
                <Avatar size="large" />
            </Box>
            <Box
                pt='16px'
                pl='20px'
                display='table-cell'
                verticalAlign='top'
            >
                <Heading.h3 fontSize='17px'>Operator</Heading.h3>
                <Text fontSize='13px'>Hotel Digital Assistant</Text>
            </Box>
        </HeaderContentContainer>
    )
}



const MessengerHeader = () => {
    return (
        <MessengerHeaderContainer>
            <HeaderContent />
        </MessengerHeaderContainer>
    )
};

export default MessengerHeader;