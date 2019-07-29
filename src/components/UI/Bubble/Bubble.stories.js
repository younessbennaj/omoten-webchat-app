import React from 'react';
import { storiesOf } from '@storybook/react';

import Bubble from './Bubble';

export const botContent = 'Would you be interested in downloading our annual report, Connect Better in 2019, on best practices from our customers and industry experts?';

storiesOf('UiBubble', module)
    .add('UiBubble', () => <Bubble>{botContent}</Bubble>)