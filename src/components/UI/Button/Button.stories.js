import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';
import SolidButton from './SolidButton';
import OutlineButton from './OutlineButton';
import QuickReply from './QuickReply';
import TextButton from './TextButton';

storiesOf('Button', module)
    .add('Default', () => <Button>Default</Button>)
    .add('Solid', () => <SolidButton>Default</SolidButton>)
    .add('Outline', () => <OutlineButton>Default</OutlineButton>)
    .add('QuickReply', () => <QuickReply>Default</QuickReply>)
    .add('TextButton', () => <TextButton>Default</TextButton>)