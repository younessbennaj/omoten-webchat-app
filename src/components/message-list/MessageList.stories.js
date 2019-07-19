import React from 'react';
import { storiesOf } from '@storybook/react';
import { botMessage, userMessage } from '../message/Message.stories';
import MessageList from './MessageList';

export const messages = [
    botMessage,
    userMessage
];

storiesOf('MessageList', module)
    .add('Sample discussion', () => <MessageList messages={messages}></MessageList>)