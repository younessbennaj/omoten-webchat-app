import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

import { theme } from '../src/theme';
import GlobalStyles from '../src/styles/global-styles';

const req = require.context('../src/components', true, /\.stories\.js$/);

const withThemeProvider = storyFn => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyles />
      {storyFn()}
    </div>
  </ThemeProvider>
);

function loadStories() {
  addDecorator(withThemeProvider);
  // require('../src/components/bubble/Bubble.story');
  req.keys().forEach(filename => req(filename));
  // You can require as many stories as you need.
}

configure(loadStories, module);