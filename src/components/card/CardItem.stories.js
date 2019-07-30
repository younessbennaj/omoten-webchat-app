import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CardItem from './';


export const card = {
        title: 'Card Title',
        text: 'a story is a function that returns something that can be rendered to screen',
        image: 'https://source.unsplash.com/random/1280x720',
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
        image: 'https://source.unsplash.com/random/1280x720',
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

storiesOf('Card Item', module)
        .add('One card', () => <CardItem card={card}></CardItem>)
        .add('Multiple buttons', () => <CardItem card={anotherCard}></CardItem>)
        .add('Small', () => <CardItem size="small" card={card}></CardItem>)
        .add('XSmall', () => <CardItem size="x-small" card={card}></CardItem>)
