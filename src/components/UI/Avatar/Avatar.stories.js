import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './';

storiesOf('AvatarUI', module)
    .add('Avatar', () => <Avatar size="medium"></Avatar>)