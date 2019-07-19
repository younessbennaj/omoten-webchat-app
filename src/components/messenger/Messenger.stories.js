import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { messages } from '../message-list/MessageList.stories';
import Messenger from './Messenger';

const Container = styled.div`
    height: 630px;
`;


storiesOf('Messenger', module)
    .add('Sample discussion', () => (
        <Container>
            <Messenger messages={messages}></Messenger>
        </Container>
    ))