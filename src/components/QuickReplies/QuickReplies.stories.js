import React from 'react';
import { storiesOf } from '@storybook/react';

import QuickReplies from './';

export const quickRepliesContent = [
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

storiesOf('NewQuickReplies', module)
    .add('Default', () => <QuickReplies content={quickRepliesContent} />)