import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addUserMessage, sendTextQueryMessage, sendEventQueryMessage } from '../../actions/messages';
import styled from 'styled-components';
import { flexbox } from 'styled-system';
import Button from '../UI/Button';
import { Box, Flex } from '../UI';

const StyledQuickReplies = styled(Flex)`
    text-align: right;
    font-size: 13px;
    justify-content: flex-end;
    > button {
        margin: 3px;
    }
`;

StyledQuickReplies.defaultProps = {};

const QuickReplies = ({ content, messages, addUserMessage, sendTextQueryMessage, sendEventQueryMessage }) => {

    const [displayQuickReplies, setdisplayQuickReplies] = useState(true);

    useEffect(() => {
        // Empty array as second argument
    }, []);

    const handleClick = (quickReply) => {
        const message = {
            type: 'text',
            content: quickReply.title
        }
        if (quickReply.type === 'event') {
            // console.log(quickReply);
            addUserMessage(message);
            sendEventQueryMessage(quickReply.value)
            setdisplayQuickReplies(false);
        }

        if (quickReply.type === 'text') {
            addUserMessage(message);
            sendTextQueryMessage(quickReply.value);
            setdisplayQuickReplies(false);
        }
        // addUserMessage(message);
        // sendUserMessage(message);
        // setdisplayQuickReplies(false);
    }

    return (
        <StyledQuickReplies display={displayQuickReplies ? 'flex' : 'none'}>
            {content.map((quickReply, i) => {
                return (
                    <Button.QuickReply key={i} onClick={() => handleClick(quickReply)}>{quickReply.title}</Button.QuickReply>
                )
            })}
        </StyledQuickReplies>
    );
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps, {
    addUserMessage,
    sendTextQueryMessage,
    sendEventQueryMessage
})(QuickReplies);