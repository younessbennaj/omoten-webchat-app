import React from 'react';
import { storiesOf } from '@storybook/react';

import Heading from './';

storiesOf('Heading', module)
    .add('Default', () => <Heading>Heading Default</Heading>)
    .add('H1', () => <Heading.h1>Heading Default</Heading.h1>)
    .add('H2', () => <Heading.h2>Heading Default</Heading.h2>)
    .add('H3', () => <Heading.h3>Heading Default</Heading.h3>)
    .add('H4', () => <Heading.h4>Heading Default</Heading.h4>)
    .add('H5', () => <Heading.h5>Heading Default</Heading.h5>)
    .add('H6', () => <Heading.h6>Heading Default</Heading.h6>)