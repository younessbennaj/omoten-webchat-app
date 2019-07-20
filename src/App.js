import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import Messenger from './containers/messenger/Messenger';


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

let messages = [];

function App() {
  return (
    <main className="container">
      <Normalize />
      <GlobalStyles />
      <Messenger></Messenger>
    </main>
  );
}

export default App;
