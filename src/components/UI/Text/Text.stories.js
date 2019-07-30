import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from './';

storiesOf('Text', module)
    .add('Default', () => <Text>Text Default</Text>)