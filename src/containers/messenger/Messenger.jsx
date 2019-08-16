import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addUserMessage, fetchMessages, sendMessage } from '../../actions/messages';
import styled from 'styled-components';
import MessengerHeader from '../../components/MessengerHeader';
import MessengerWindow from '../../components/MessengerWindow';
import MessengerInput from '../../components/MessengerInput';
import { Box, Flex } from '../../components/UI';

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

const Messenger = ({ messages, quickReplies, addUserMessage, sendMessage, fetchMessages }) => {

    useEffect(() => {
        fetchMessages();
        sendMessage({ type: 'event', value: 'Welcome' });
    }, []);

    return (
        <MessengerContainer>
            <Box>
                <MessengerHeader />
            </Box>
            <Box position='relative' height='100%'>
                <MessengerWindow messages={messages} quickReplies={quickReplies} />
            </Box>
            <Box position='relative' height="auto">
                <MessengerInput addUserMessage={addUserMessage} sendMessage={sendMessage} />
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