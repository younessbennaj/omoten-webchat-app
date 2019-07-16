import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { textMessage, testMessage1, testMessage2 } from '../message-item/MessageItem.stories';
import { quickRepliesMessage } from '../message-item/MessageItem.stories';
import { carouselMessage } from '../message-item/MessageItem.stories';
import Message from '../message/Message';

export const sampleMessage = [
    testMessage1,
    testMessage2
];

storiesOf('Message', module)
    .add('Sample Message', () => <Message message={sampleMessage}></Message>)