import React from 'react';
import { storiesOf } from '@storybook/react';

import Image from './';

storiesOf('Image', module)
    .add('Default', () => <Image width={1} src="https://source.unsplash.com/random/1280x720" alt="random image" />)