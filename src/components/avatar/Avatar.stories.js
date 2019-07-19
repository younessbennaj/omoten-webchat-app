import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';

storiesOf('Avatar', module)
    .add('Avatar', () => <Avatar size="30px"></Avatar>)