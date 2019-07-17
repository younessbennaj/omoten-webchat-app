import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MessengerHeader from './MessengerHeader';

storiesOf('MessengerHeader', module)
    .add('Header', () => <MessengerHeader></MessengerHeader>)