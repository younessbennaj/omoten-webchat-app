import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import MessageList from '../message-list/MessageList';
import { headerTheme } from '../../theme';
import MessengerHeader from '../messenger-header/MessengerHeader';
import MessengerInput from '../messenger-input/MessengerInput';

const MessengerContent = styled.div`
    height: 100%;
`;

const Conversation = styled.div`
    height: 100%;
`;

const Messenger = ({ messages }) => {
    return (
        <MessengerContent>
            <ThemeProvider theme={headerTheme}>
                <MessengerHeader>
                </MessengerHeader>
            </ThemeProvider>
            <Conversation>
                <MessageList messages={messages}></MessageList>
                <MessengerInput></MessengerInput>
            </Conversation>
        </MessengerContent>
    );
}

export default Messenger;