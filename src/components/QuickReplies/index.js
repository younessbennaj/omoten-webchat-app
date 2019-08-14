import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addUserMessage, sendUserMessage } from '../../actions/messages';
import styled from 'styled-components';
import { flexbox } from 'styled-system';
import Button from '../UI/Button';
import { Box } from '../UI';

const StyledQuickReplies = styled(Box)`
    text-align: right;
    position: absolute;
    right: 0;
    font-size: 13px;
    padding-bottom: 15px;

    > button {
        margin: 3px;
    }
`;

StyledQuickReplies.defaultProps = {};

const QuickReplies = ({ content, messages, addUserMessage, sendUserMessage }) => {

    const [displayQuickReplies, setdisplayQuickReplies] = useState(true);

    useEffect(() => {
        // Empty array as second argument
    }, []);

    const handleClick = (quickReply) => {
        const message = {
            type: 'text',
            content: quickReply.value
        }
        addUserMessage(message);
        sendUserMessage(message);
        setdisplayQuickReplies(false);
    }

    return (
        <StyledQuickReplies display={displayQuickReplies ? 'inline-block' : 'none'}>
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
    sendUserMessage
})(QuickReplies);