import React from 'react';
import styled from 'styled-components';
import { Card, Image, Box, Button, Heading, Flex, Text } from '../UI';
import { FaWifi } from "react-icons/fa";

const size = props => {
    switch (props.size) {
        case 'x-small':
            return `
                height: auto;
                width: 240px;

                > img {
                    height: 130px;
                }
        `;
        case 'small':
            return `
                height: auto;
                width: 300px;
        `;
        case 'medium':
            return `
                height: auto;
                width: 360px;
        `;
        case 'large':
            return `
                height: auto;
                width: 420px;
        `;
        default:
            return `
                height: auto;
                width: 360px;
            `;
    }
};

const CardContainer = styled(Card)`
    ${size}
`;

CardContainer.defaultProps = {
    p: 0
}

const CardItem = React.forwardRef(({ card: { title, text, image, buttons }, ...props }, ref) => (
    < CardContainer ref={ref} {...props}>
        <Image
            width={1}
            src={image}
            alt="random image from unsplash.com"
        />

        <Box px={4} py={3}>
            <Heading.h1
                py='10px'
                fontSize='20px'
                fontWeight='bold'
                letterSpacing='0.2px'
            >
                {title}
            </Heading.h1>
            <Heading.h6 color="#666">1K PARIS - <span style={{ color: '#b6bcc1' }}>Show in map</span></Heading.h6>
            <Text pt='10px' fontSize='12px' color='#797d80'>{text}</Text>
        </Box>

        <Flex alignItems='center' justifyContent='space-between' px={4} height="68px" borderTop={1} borderColor={"#E8E8E8"}>
            <Text color='primary' fontSize='20px' fontWeight='600'>
                {/* <span style={{ fontSize: '16px', fontWeight: '400' }}>from</span> */}
                <Text color='bodyText' fontSize='14px' fontWeight='400' lineHeight='0.8'>
                    from
                </Text>
                182$<span style={{ fontSize: '16px', fontWeight: '400' }}>/night</span>
            </Text>
            <Text fontSize='14px'>Maximum persons: 2</Text>
            {/* {buttons.map((button, i) => {
                return (
                    <Button key={i} height={"auto"}>
                        {button.title}
                    </Button>
                )
            })} */}
        </Flex>
    </CardContainer >
));

export default CardItem;