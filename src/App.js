import React from 'react';
import Bubble from './components/bubble/Bubble';
import 'bootstrap/dist/css/bootstrap.css';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 html {
   box-sizing: border-box;
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
`;

export const userBubble = {
  text: 'I want to book a room for tomorrow',
  isUser: true
};

export const botBubble = {
  text: 'Good day! What can I do for you today?',
  isUser: false
};

function App() {
  return (
    <main className="container">
      <Normalize />
      <Bubble bubble={botBubble}></Bubble>
      <Bubble bubble={userBubble}></Bubble>
    </main>
  );
}

export default App;
