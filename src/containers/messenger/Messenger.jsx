import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addUserMessage, fetchMessages, sendMessage } from '../../actions/messages';
import axios from 'axios';
import styled from 'styled-components';
import MessageList from '../../components/message-list/MessageList';
import { ThemeProvider } from 'styled-components';
import MessengerHeader from '../../components/messenger-header';
import MessengerInput from '../../components/MessengerInput';
import QuickReplies from '../../components/QuickReplies';
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
    height: '100%',
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
    bottom: '2px',
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

const Messenger = ({
    messages,
    quickReplies,
    addUserMessage,
    sendMessage,
    fetchMessages
}) => {

    // addQuickReplies(content);

    // const [quickReply, setQuickReply] = useState([]);

    useEffect(() => {
        sendMessage({ type: 'event', value: 'Welcome' });
    }, []);

    return (
        <MessengerContainer>
            <Box>
                <MessengerHeader />
            </Box>
            <Box
                position='relative'
                height='100%'
            >
                <MessageListContainer>
                    <MessageListContent messages={messages}>
                    </MessageListContent>
                </MessageListContainer>
            </Box>
            <Box p={3} bg='white'>
                {quickReplies.map((quickReply, i) => {
                    return <QuickReplies key={i} content={quickReply.content}></QuickReplies>
                })}
            </Box>
            <Box
                position='relative'
                height="auto"
            >
                <MessengerInput
                    addUserMessage={addUserMessage}
                    sendMessage={sendMessage}
                />
            </Box>
        </MessengerContainer >
    );
}

function mapStateToProps(state) {
    const { messages, quickReplies } = state;
    return { messages, quickReplies };
}

export default connect(mapStateToProps, {
    addUserMessage,
    fetchMessages,
    sendMessage
})(Messenger);