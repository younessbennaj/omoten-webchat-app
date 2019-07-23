import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import Messenger from '../messenger/Messenger';


const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font: inherit;
        border: none;
        outline: none;
        font-family: 'Roboto', Helvetica, sans-serif;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
`;

const WebChat = () => {
    return (
        <div>
            <Normalize />
            <GlobalStyles />
            <Messenger />
        </div>
    );
}

export default WebChat;