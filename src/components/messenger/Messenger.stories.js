import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { messages } from '../message-list/MessageList.stories';
import Messenger from './Messenger';

storiesOf('Messenger', module)
    .add('Sample discussion', () => <Messenger messages={messages}></Messenger>)