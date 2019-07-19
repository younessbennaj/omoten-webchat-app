import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Bubble from './Bubble';


export const userContent = 'Thats cool';

export const botContent = 'Would you be interested in downloading our annual report, Connect Better in 2019, on best practices from our customers and industry experts?';


// Technically, a story is a function that returns something that can be rendered to screen.

// We first call the storiesOf() function to register the component.

//To define our stories, we call add() once for each of our test states to generate a story.

storiesOf('Bubble', module)
    .add('with bot text', () => <Bubble content={botContent}></Bubble>)
    .add('with user text', () => <Bubble content={userContent}></Bubble>, {
        notes: "Message from chatbot"
    });