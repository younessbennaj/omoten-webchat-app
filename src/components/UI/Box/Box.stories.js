import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from './';

storiesOf('Box', module)
    .add('Box', () => <Box bg="primary" color="white" >Hello</Box>)