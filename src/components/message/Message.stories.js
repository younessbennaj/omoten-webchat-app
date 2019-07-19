import React from 'react';
import { storiesOf } from '@storybook/react';
import { testMessage1, testMessage2 } from '../message-item/MessageItem.stories';
import { quickRepliesMessage } from '../message-item/MessageItem.stories';
import Message from '../message/Message';

export const sampleMessage = {
    isUser: false,
    replies: [
        testMessage1,
        testMessage2,
        quickRepliesMessage
    ]
};

export const userMessage = {
    isUser: true,
    replies: [
        testMessage1
    ]
};

storiesOf('Message', module)
    .add('Sample Message', () => <Message message={sampleMessage}></Message>)