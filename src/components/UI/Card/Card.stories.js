import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './';
import Box from '../Box';
import Heading from '../Heading';
import Text from '../Text';
import Button from '../Button';

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

storiesOf('Card UI', module)
    .add('Default', () => <Card>Hello</Card>)
    .add('Heading & Button', () => <CardExample />)