import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { botBubble } from '../bubble/Bubble.stories';
import { quickReplies } from '../quick-replies/QuickReplies.stories';
import { carousel } from '../carousel/Carousel.stories';
import MessageItem from './MessageItem';

export const textMessage = {
    isUser: true,
    type: 'text',
    content: botBubble
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
