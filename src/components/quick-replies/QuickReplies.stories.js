import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import QuickReplies from './QuickReplies';

export const quickReplies = {
    text: 'Book a room',
};

// Technically, a story is a function that returns something that can be rendered to screen.

// We first call the storiesOf() function to register the component.

//To define our stories, we call add() once for each of our test states to generate a story.

storiesOf('QuickReplies', module)
    .add('with text', () => <QuickReplies quickReplies={quickReplies}></QuickReplies>)