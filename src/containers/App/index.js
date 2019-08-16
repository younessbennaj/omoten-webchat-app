import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Normalize } from 'styled-normalize';
import Messenger from '../messenger/Messenger';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import GlobalStyles from '../../styles/global-styles';


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