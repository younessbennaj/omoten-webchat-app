import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MessengerInput from './MessengerInput';

storiesOf('MessengerInput', module)
    .add('MessengerInput', () => <MessengerInput></MessengerInput>)