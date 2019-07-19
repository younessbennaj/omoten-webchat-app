import React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from './Carousel';

export const carousel = [
    {
        title: 'Card Title',
        text: 'a story is a function that returns something that can be rendered to screen',
        image: 'https://placeimg.com/640/480/arch',
        buttons: [
            {
                title: 'Button Title',
                type: 'Button Type',
                value: 'Button Value'
            }
        ]
    },
    {
        title: 'Card Title',
        text: 'a story is a function that returns something that can be rendered to screen',
        image: 'https://placeimg.com/640/480/arch',
        buttons: [
            {
                title: 'Button Title',
                type: 'Button Type',
                value: 'Button Value'
            }
        ]
    },
    {
        title: 'Card Title',
        text: 'a story is a function that returns something that can be rendered to screen',
        image: 'https://placeimg.com/640/480/arch',
        buttons: [
            {
                title: 'Button Title',
                type: 'Button Type',
                value: 'Button Value'
            }
        ]
    }
];

// Technically, a story is a function that returns something that can be rendered to screen.

// We first call the storiesOf() function to register the component.

//To define our stories, we call add() once for each of our test states to generate a story.

storiesOf('Carousel', module)
    .add('One card', () => <Carousel carousel={carousel}></Carousel>)