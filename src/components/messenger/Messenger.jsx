import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageList from '../message-list/MessageList';
import { headerTheme } from '../../theme';
import { ThemeProvider } from 'styled-components';
import MessengerHeader from '../messenger-header/MessengerHeader';
import MessengerInput from '../messenger-input/MessengerInput';
import { messages } from '../message-list/MessageList.stories';

const Messenger = () => {

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

const df_text_query_result = async ({ content }) => {
    console.log(content);
}

const useMessages = (conversation) => {
    const [messages, setMessages] = useState(conversation);

    return {
        messages,
        setMessages,
        bind: {
            onMessageSubmit: message => {
                df_text_query_result(message);
                const newMessages = [...messages];
                newMessages.push({ isUser: true, replies: [message] });
                setMessages(newMessages);
            }
        }
    }


}

export default Messenger;