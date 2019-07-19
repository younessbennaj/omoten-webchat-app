import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import Messenger from './components/messenger/Messenger';
import { messages } from './components/message-list/MessageList.stories';

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

function App() {
  return (
    <main className="container">
      <Normalize />
      <GlobalStyles />
      <Messenger messages={messages}></Messenger>
    </main>
  );
}

export default App;
