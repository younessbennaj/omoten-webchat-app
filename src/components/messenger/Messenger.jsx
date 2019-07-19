import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageList from '../message-list/MessageList';
import { headerTheme } from '../../theme';
import { ThemeProvider } from 'styled-components';
import MessengerHeader from '../messenger-header/MessengerHeader';
import MessengerInput from '../messenger-input/MessengerInput';
import { messages } from '../message-list/MessageList.stories';

const Messenger = () => {

    const { messages: conversation, setMessages, bind, input: { content: text }, resetInput } = useMessages(messages);

    useEffect(() => {
        async function textQueryResult() {
            const data = { text, userId: '1827367493' };
            const response = await axios.post('https://dae75b5c.ngrok.io/api/df_text_query', data);
            const replies = response.data.fulfillmentMessages.map((response) => {
                return payloadReducer(response.payload);
            });
            const newMessages = [...conversation];
            newMessages.push({ isUser: false, replies });
            setMessages(newMessages);
        }
        if (text) {
            textQueryResult();
            resetInput();
        }
    })

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

const payloadReducer = payload => {

    let result = {};

    for (let key in payload.fields) {
        if (payload.fields[key].stringValue) {
            result[key] = payload.fields[key].stringValue;
        } else {
            result[key] = payload.fields.content.listValue.values.map((item) => {
                let content = {};
                for (let key in item.structValue.fields) {
                    if (item.structValue.fields[key].stringValue) {
                        content[key] = item.structValue.fields[key].stringValue;
                    } else {
                        content[key] = this.payloadReducer(item.structValue.fields[key]);
                    }
                }
                return content;
            });
        }

    }

    return result;

};

const useMessages = (conversation) => {
    const [messages, setMessages] = useState(conversation);
    const [input, setInput] = useState('');

    return {
        messages,
        setMessages,
        input,
        resetInput: () => {
            setInput('');
        },
        bind: {
            onMessageSubmit: message => {
                const newMessages = [...messages];
                setInput(message);
                newMessages.push({ isUser: true, replies: [message] });
                setMessages(newMessages);
            }
        }
    }


}

export default Messenger;