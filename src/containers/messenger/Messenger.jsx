import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addUserMessage, fetchMessages, sendTextQueryMessage, addWelcomeMessage } from '../../actions/messages';
import axios from 'axios';
import styled from 'styled-components';
import MessageList from '../../components/message-list/MessageList';
import { ThemeProvider } from 'styled-components';
import MessengerHeader from '../../components/messenger-header';
import MessengerInput from '../../components/MessengerInput';
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

const Messenger = ({ messages, addUserMessage, fetchMessages, sendTextQueryMessage, addWelcomeMessage }) => {

    useEffect(() => {
        // fetchMessages();
        addWelcomeMessage();
    }, []);

    return (
        <MessengerContainer>
            <MessengerHeader />
            <MessageListContainer>
                <MessageListContent messages={messages}>
                </MessageListContent>
            </MessageListContainer>
            <MessengerInput addUserMessage={addUserMessage} sendTextQueryMessage={sendTextQueryMessage} />
        </MessengerContainer>
    );
}

function mapStateToProps(state) {
    const { messages } = state;
    return { messages };
}

export default connect(mapStateToProps, {
    addUserMessage,
    fetchMessages,
    sendTextQueryMessage,
    addWelcomeMessage
})(Messenger);