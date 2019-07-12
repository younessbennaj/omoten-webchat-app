import { configure } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  // require('../src/components/bubble/Bubble.story');
  req.keys().forEach(filename => req(filename));
  // You can require as many stories as you need.
}

configure(loadStories, module);