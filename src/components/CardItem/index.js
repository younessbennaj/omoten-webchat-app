import React from 'react';
import styled from 'styled-components';
import { Card, Image, Box, Button, Heading, Flex, Text, Grid } from '../UI';
import { FaWifi, FaTv, FaBed, FaClone, FaBath, FaWineBottle, FaStar, FaStarHalf } from "react-icons/fa";

const size = props => {
    switch (props.size) {
        case 'x-small':
            return `
                height: auto;
                width: 300px;

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

        <Box px={4} py={1}>
            <Heading.h1
                py='10px'
                fontSize='20px'
                fontWeight='bold'
                letterSpacing='0.2px'
            >
                {title}
            </Heading.h1>
            {/* <Text pt='10px' fontSize='12px' color='#797d80'>{text}</Text> */}
        </Box>
        <Box px={4}>
            <Heading.h6 pb='5px' color="#666">1K PARIS - <span style={{ color: '#b6bcc1' }}>Show reviews</span></Heading.h6>
            <Flex alignItems='center' justifyContent='space-between'>
                <Flex alignItems='center'>
                    <Flex color="#FBC02D" alignItems='center' fontSize='14px'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></Flex>
                    <Text pl='5px' fontSize='14px' fontWeight='500'>4.5</Text>
                </Flex>
                <Text color='#b6bcc1' fontSize='12px' fontWeight='500'>1715 reviews</Text>
            </Flex>
        </Box>

        <Box px={4} py={3}>
            <Text fontSize='12px' color="#666" pb='10px' fontWeight='600'>Amenities</Text>
            <Grid gridTemplateColumns="repeat(3, auto)" gridTemplateRows="repeat(2, auto)" gridGap={3} color='#797d80'>
                <Flex fontSize='11px' px='10px' justifyContent='flex-start' alignItems='center'><FaWifi style={{ marginRight: '10px' }} />Wifi</Flex>
                <Flex fontSize='11px' px='10px' justifyContent='flex-start' alignItems='center'><FaTv style={{ marginRight: '10px' }} />VOD</Flex>
                <Flex fontSize='11px' px='10px' justifyContent='flex-start' alignItems='center'><FaBed style={{ marginRight: '10px' }} />Twin</Flex>
                <Flex fontSize='11px' px='10px' justifyContent='flex-start' alignItems='center'><FaBed style={{ marginRight: '10px' }} />25 m²</Flex>
                <Flex fontSize='11px' px='10px' justifyContent='flex-start' alignItems='center'><FaBath style={{ marginRight: '10px' }} />Bath</Flex>
                <Flex fontSize='11px' px='10px' justifyContent='flex-start' alignItems='center'><FaWineBottle style={{ marginRight: '10px' }} />Minibar</Flex>
            </Grid>
        </Box>
        <Flex px={4} py={3} justifyContent='flex-end'>
            <Text color='#666' fontSize='12px' fontWeight='500'>Maximum persons: 2</Text>
        </Flex>
        <Flex alignItems='center' justifyContent='space-between' px={4} height="68px" borderTop={1} borderColor={"#E8E8E8"}>
            <Text color='primary' fontSize='20px' fontWeight='600'>
                <Text color='bodyText' fontSize='14px' fontWeight='400' lineHeight='0.8'>
                    from
                </Text>
                182$<span style={{ fontSize: '16px', fontWeight: '400' }}>/night</span>
            </Text>
            <Button >
                Show Rates
            </Button>
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