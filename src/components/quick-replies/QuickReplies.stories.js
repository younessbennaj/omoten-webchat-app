import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import QuickReplies from './QuickReplies';

export const quickReply = [
    {
        text: 'Choice 1'
    }
];

export const quickReplies = [
    {
        text: 'Choice 1'
    },
    {
        text: 'Choice 2'
    },
    {
        text: 'Choice 3'
    }
];

// Technically, a story is a function that returns something that can be rendered to screen.

// We first call the storiesOf() function to register the component.

//To define our stories, we call add() once for each of our test states to generate a story.

storiesOf('QuickReplies', module)
    .add('One option', () => <QuickReplies quickReplies={quickReply}></QuickReplies>)
    .add('Multiple option', () => <QuickReplies quickReplies={quickReplies}></QuickReplies>)