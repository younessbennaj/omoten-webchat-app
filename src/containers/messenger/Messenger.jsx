import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addUserMessage } from '../../actions/messages';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import MessageList from '../../components/message-list/MessageList';
import { headerTheme } from '../../theme';
import { ThemeProvider } from 'styled-components';
import MessengerHeader from '../../components/messenger-header/MessengerHeader';
import MessengerInput from '../../components/messenger-input/MessengerInput';

const Messenger = ({ messages, addUserMessage }) => {

    // const { messages: conversation, setMessages, bind, textQuery: { content: text }, resetTextQuery } = useMessages(messages);

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

    const onMessageSubmit = (message) => {
        addUserMessage(message);
    }

    return (
        <div style={{ height: "100%" }}>
            <ThemeProvider theme={headerTheme}>
                <MessengerHeader>
                </MessengerHeader>
            </ThemeProvider>
            <div style={{ height: "100%" }}>
                <MessageList messages={messages}></MessageList>
                <MessengerInput onMessageSubmit={onMessageSubmit}></MessengerInput>
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

// React custom hook to handle the conversation state in function component

// const useMessages = (conversation) => {
//     const [messages, setMessages] = useState(conversation);
//     const [textQuery, setTextQuery] = useState('');

//     return {
//         messages,
//         setMessages,
//         textQuery,
//         resetTextQuery: () => {
//             setTextQuery('');
//         },
//         bind: {
//             onMessageSubmit: message => {
//                 props.addUserMessage(message);
//                 // const newMessages = [...messages];
//                 // setTextQuery(message);
//                 // newMessages.push({ isUser: true, replies: [message] });
//                 // setMessages(newMessages);
//             }
//         }
//     }

// }

//Va être appelé à chaque fois que le state change 
function mapStateToProps(state) {
    const { messages } = state;
    return { messages };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addUserMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Messenger);