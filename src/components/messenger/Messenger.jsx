import React, { useState } from 'react';
import MessageList from '../message-list/MessageList';
import { headerTheme } from '../../theme';
import { ThemeProvider } from 'styled-components';
import MessengerHeader from '../messenger-header/MessengerHeader';
import MessengerInput from '../messenger-input/MessengerInput';

const Messenger = ({ messages }) => {

    const { messages: conversation, setMessages, bind } = useMessages(messages);

    return (
        <div style={{ height: "100%" }}>
            <ThemeProvider theme={headerTheme}>
                <MessengerHeader>
                </MessengerHeader>
            </ThemeProvider>
            <div style={{ height: "100%" }}>
                <MessageList messages={conversation}></MessageList>
                <MessengerInput {...bind}></MessengerInput>
            </div>
        </div>
    );
}

const useMessages = (conversation) => {
    const [messages, setMessages] = useState(conversation);

    return {
        messages,
        setMessages,
        bind: {
            onMessageSubmit: message => {
                const newMessages = [...messages];
                newMessages.push({ isUser: true, replies: [message] });
                setMessages(newMessages);
            }
        }
    }


}

export default Messenger;