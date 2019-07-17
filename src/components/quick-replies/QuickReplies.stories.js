import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import QuickReplies from './QuickReplies';

export const quickReplies = [
    {
        title: 'Choice 1',
        value: "BUTTON_VALUE"
    },
    {
        title: 'Choice 2',
        value: "BUTTON_VALUE"
    },
    {
        title: 'Choice 3',
        value: "BUTTON_VALUE"
    }
]


// Technically, a story is a function that returns something that can be rendered to screen.

// We first call the storiesOf() function to register the component.

//To define our stories, we call add() once for each of our test states to generate a story.

storiesOf('QuickReplies', module)
    .add('Multiple option', () => <QuickReplies quickReplies={quickReplies}></QuickReplies>)