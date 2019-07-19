import React from 'react';
import { storiesOf } from '@storybook/react';
import { botBubble, testBubble1, testBubble2 } from '../bubble/Bubble.stories';
import { quickReplies } from '../quick-replies/QuickReplies.stories';
import { carousel } from '../carousel/Carousel.stories';
import MessageItem from './MessageItem';

export const textMessage = {
    isUser: true,
    type: 'text',
    content: botBubble
}

export const testMessage1 = {
    isUser: true,
    type: 'text',
    content: testBubble1
}

export const testMessage2 = {
    isUser: true,
    type: 'text',
    content: testBubble2
}

export const quickRepliesMessage = {
    isUser: false,
    type: 'quickReplies',
    content: quickReplies
}

export const carouselMessage = {
    isUser: false,
    type: 'carousel',
    content: carousel
}

storiesOf('MessageItem', module)
    .add('Text Message', () => <MessageItem item={textMessage}></MessageItem>)
    .add('Quick replies Message', () => <MessageItem item={quickRepliesMessage}></MessageItem>)
    .add('Carousel Message', () => <MessageItem item={carouselMessage}></MessageItem>)
