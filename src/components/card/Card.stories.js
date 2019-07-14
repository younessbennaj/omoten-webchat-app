import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card from './Card';


export const card = {
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

export const anotherCard = {
        title: 'Card Title',
        text: 'a story is a function that returns something that can be rendered to screen',
        image: 'https://placeimg.com/640/480/arch',
        buttons: [
                {
                        title: 'Button Title',
                        type: 'Button Type',
                        value: 'Button Value'
                },
                {
                        title: 'Another Button Title',
                        type: 'Another Button Type',
                        value: 'Another Button Value'
                }
        ]
}

// Technically, a story is a function that returns something that can be rendered to screen.

// We first call the storiesOf() function to register the component.

//To define our stories, we call add() once for each of our test states to generate a story.

storiesOf('Card', module)
        .add('One card', () => <Card card={card}></Card>)
        .add('Multiple buttons', () => <Card card={anotherCard}></Card>)
