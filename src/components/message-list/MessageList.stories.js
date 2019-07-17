import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { sampleMessage, userMessage } from '../message/Message.stories';
import MessageList from './MessageList';

const messages = [
    sampleMessage,
    userMessage
];

storiesOf('MessageList', module)
    .add('Sample discussion', () => <MessageList messages={messages}></MessageList>)