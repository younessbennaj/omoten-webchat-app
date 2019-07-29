import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import Messenger from '../messenger/Messenger';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import GlobalStyles from '../../styles/global-styles';

// const GlobalStyles = createGlobalStyle`
//     html {
//         box-sizing: border-box;
//         margin: 0;
//         padding: 0;
//         font: inherit;
//         border: none;
//         outline: none;
//         font-family: 'Roboto', Helvetica, sans-serif;
//     }

//     *,
//     *::before,
//     *::after {
//         box-sizing: inherit;
//     }
// `;

const WebChat = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Normalize />
                <GlobalStyles />
                <Messenger />
            </div>
        </ThemeProvider>
    );
}

export default WebChat;