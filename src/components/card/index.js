import React from 'react';
import styled from 'styled-components';
import { Card, Image, Box, Button, Heading, Flex } from '../UI';

const CardItem = ({ card: { title, text, image, buttons } }) => {
    return (
        <Card width={"420px"} mx={"auto"} my={5} p={0}>
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
        </Card>
    );
}

export default CardItem;