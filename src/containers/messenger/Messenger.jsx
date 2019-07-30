import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addUserMessage, fetchMessages, sendUserMessage } from '../../actions/messages';
import axios from 'axios';
import styled from 'styled-components';
import MessageList from '../../components/message-list/MessageList';
import { headerTheme } from '../../theme';
import { ThemeProvider } from 'styled-components';
import MessengerHeader from '../../components/messenger-header/MessengerHeader';
import MessengerInput from '../../components/messenger-input/MessengerInput';

const Content = styled.div`
    height: 345px;
    overflow: hidden;
    overflow-y: scroll;
`

const Messenger = ({ messages, addUserMessage, fetchMessages, sendUserMessage }) => {

    let messagesEnd;

    // useEffect(() => {
    //     if (text) {
    //         textQueryResult(text, conversation, setMessages).then((data) => {
    //             resetTextQuery();
    //             const newMessages = [...conversation];
    //             newMessages.push({ isUser: false, replies: data });
    //             setMessages(newMessages);
    //         });
    //     }
    // })

    useEffect(() => {
        fetchMessages();
    }, []);

    useEffect(() => {
        messagesEnd.scrollIntoView({ behaviour: "smooth" });
    }, [messages]);

    return (
        <div style={{ height: "100%" }}>
            <ThemeProvider theme={headerTheme}>
                <MessengerHeader>
                </MessengerHeader>
            </ThemeProvider>
            <div style={{ height: "100%" }}>
                <Content>
                    <MessageList messages={messages}>
                    </MessageList>
                    <div ref={(element) => { messagesEnd = element; }}></div>
                </Content>
                <MessengerInput sendUserMessage={sendUserMessage} addUserMessage={addUserMessage}></MessengerInput>
            </div>
        </div>
    );
}

// Get reponse from text query request to dialogflow 

const textQueryResult = async (text) => {
    const data = { text, userId: '1827367493' };
    const response = await axios.post('https://dae75b5c.ngrok.io/api/df_text_query', data);
    const replies = response.data.fulfillmentMessages.map((response) => {
        return payloadReducer(response.payload);
    });
    return replies;
}
// Parse payloads response from dialogflow and return a correct format 

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

//Va être appelé à chaque fois que le state change 
function mapStateToProps(state) {
    const { messages } = state;
    return { messages };
}

export default connect(mapStateToProps, {
    addUserMessage,
    fetchMessages,
    sendUserMessage
})(Messenger);