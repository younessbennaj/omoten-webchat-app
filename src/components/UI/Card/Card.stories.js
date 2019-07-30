import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './';
import Box from '../Box';
import Flex from '../Flex';
import Heading from '../Heading';
import Text from '../Text';
import Button from '../Button';
import Image from '../Image';

const CardExample = () => {
    return (
        <Card width={"420px"} mx={"auto"} px={4}>
            <Heading>Heading</Heading>
            <Box>
                <Text mb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam autem ratione doloribus quidem neque provident eius
                    error dignissimos delectus architecto nemo quos alias sunt
                    voluptate impedit, facilis sequi tempore. Amet!
                </Text>
            </Box>
            <Button mr={3}>Accept</Button>

            <Button.Outline>Cancel</Button.Outline>
        </Card>
    )
}

const CardImageExample = () => {
    return (
        <Card width={"420px"} mx={"auto"} my={5} p={0}>
            <Image
                width={1}
                src="https://source.unsplash.com/random/1280x720"
                alt="random image from unsplash.com"
            />

            <Box px={4} py={3}>
                <Heading.h2>Card title</Heading.h2>
                <Heading.h5 color="#666">Card sub-title</Heading.h5>
            </Box>

            <Flex px={4} height="64px" borderTop={1} borderColor={"#E8E8E8"}>
                <Button.Text p={"0"} mr={4} height={"auto"}>
                    Text Button
                </Button.Text>

                <Button.Text p={"0"} height={"auto"}>
                    Text Button
                </Button.Text>
            </Flex>
        </Card>
    )
}

const SmallExample = () => {
    return (
        <Card width={"300px"} mx={"auto"} my={5} p={0}>
            <Image
                width={1}
                src="https://source.unsplash.com/random/1280x720"
                alt="random image from unsplash.com"
            />

            <Box px={4} py={3}>
                <Heading.h2>Card title</Heading.h2>
                <Heading.h5 color="#666">Card sub-title</Heading.h5>
            </Box>

            <Flex px={4} height="64px" borderTop={1} borderColor={"#E8E8E8"}>
                <Button.Text p={"0"} mr={4} height={"auto"}>
                    Text Button
                </Button.Text>

                <Button.Text p={"0"} height={"auto"}>
                    Text Button
                </Button.Text>
            </Flex>
        </Card>
    )
}
storiesOf('Card UI', module)
    .add('Default', () => <Card>Hello</Card>)
    .add('Heading & Button', () => <CardExample />)
    .add('Heading & Image & Button', () => <CardImageExample />)
    .add('Small', () => <SmallExample />)