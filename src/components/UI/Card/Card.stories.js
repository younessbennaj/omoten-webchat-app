import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './';

storiesOf('Card UI', module)
    .add('Default', () => <Card>Hello</Card>)