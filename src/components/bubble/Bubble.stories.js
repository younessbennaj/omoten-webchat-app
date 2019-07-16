import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Bubble from './Bubble';

export const userBubble = {
    text: 'I want to book a room for tomorrow',
    isUser: true
};

export const botBubble = {
    text: 'Good day!',
    isUser: false
};

// Technically, a story is a function that returns something that can be rendered to screen.

// We first call the storiesOf() function to register the component.

//To define our stories, we call add() once for each of our test states to generate a story.

storiesOf('Bubble', module)
    .add('with bot text', () => <Bubble bubble={userBubble}></Bubble>)
    .add('with user text', () => <Bubble bubble={botBubble}></Bubble>, {
        notes: "Message from chatbot"
    });