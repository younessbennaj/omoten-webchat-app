import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addUserMessage, fetchMessages, sendUserMessage } from '../../actions/messages';
import axios from 'axios';
import styled from 'styled-components';
import MessageList from '../../components/message-list/MessageList';
import { ThemeProvider } from 'styled-components';
import MessengerHeader from '../../components/messenger-header';
// import MessengerInput from '../../components/messenger-input/MessengerInput';
import { Box, Flex, Avatar, Heading, Text, Input } from '../../components/UI';

//Messenger Container Style 

const MessengerContainer = styled(Flex)({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    overflow: 'hidden'
})

//Message List Container Style 

const MessageListContainer = styled(Flex)({
    position: 'relative',
    flexGrow: '1',
    flexShrink: '1'
});

MessageListContainer.defaultProps = {
    bg: "white"
};

//Message List Content Style 

const MessageListContentContainer = styled(Flex)({
    flexDirection: 'column',
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '48px',
    left: '0',
    overflowX: 'hidden',
    overflowY: 'scroll'
});

const MessageListContent = ({ messages }) => {
    //Auto scroll to the end of the message list when a new message is added
    let messagesEnd;
    useEffect(() => {
        messagesEnd.scrollIntoView({ behaviour: "smooth" });
    }, [messages]);


    return (
        <MessageListContentContainer>
            <Flex
                p="24px"
                pb="0"
                flexFlow="row wrap"
            >
                <MessageList messages={messages}>
                </MessageList>
            </Flex>
            <div ref={(element) => { messagesEnd = element; }}></div>
        </MessageListContentContainer>
    )
}

const Messenger = ({ messages, addUserMessage, fetchMessages, sendUserMessage }) => {

    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <MessengerContainer>
            <MessengerHeader />
            <MessageListContainer>
                <MessageListContent messages={messages}>
                </MessageListContent>
            </MessageListContainer>
            <Box>
                <Box
                    position='absolute'
                    bottom='0px'
                    left='0px'
                    right='0px'
                    height='200px'
                >
                    <Input
                        position='absolute'
                        bottom='0px'
                        left='0px'
                        width='100%'
                    >
                    </Input>
                </Box>
            </Box>
        </MessengerContainer>
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