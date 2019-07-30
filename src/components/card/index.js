import React from 'react';
import styled from 'styled-components';
import { Card, Image, Box, Button, Heading, Flex } from '../UI';

const size = props => {
    switch (props.size) {
        case 'x-small':
            return `
                height: auto;
                width: 240px;
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
    my: 5,
    p: 0
}

const CardItem = React.forwardRef(({ card: { title, text, image, buttons }, ...props }, ref) => (
    < CardContainer ref={ref} {...props}>
        {console.log(props)}
        <Image
            width={1}
            src={image}
            alt="random image from unsplash.com"
        />

        <Box px={4} py={3}>
            <Heading.h2>{title}</Heading.h2>
            <Heading.h5 color="#666">{text}</Heading.h5>
        </Box>

        <Flex px={4} height="64px" borderTop={1} borderColor={"#E8E8E8"}>
            {buttons.map(button => {
                return (
                    <Button.Text p={"0"} mr={4} height={"auto"}>
                        {button.title}
                    </Button.Text>
                )
            })}
        </Flex>
    </CardContainer >
));

export default CardItem;