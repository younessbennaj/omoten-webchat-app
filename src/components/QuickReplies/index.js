import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addUserMessage, sendMessage, deleteQuickReplies } from '../../actions/messages';
import styled from 'styled-components';
import Button from '../UI/Button';
import { Flex } from '../UI';

const StyledQuickReplies = styled(Flex)`
    text-align: right;
    font-size: 13px;
    justify-content: flex-end;
    > button {
        margin: 3px;
    }
`;

StyledQuickReplies.defaultProps = {};

const QuickReplies = ({ content, messages, addUserMessage, sendMessage, deleteQuickReplies }) => {

    useEffect(() => {
        // Empty array as second argument
    }, []);

    const handleClick = (quickReply) => {
        const message = {
            type: 'text',
            content: quickReply.title
        }
        if (quickReply.type === 'event') {
            deleteQuickReplies();
            addUserMessage(message);
            sendMessage(quickReply);
        }

        if (quickReply.type === 'text') {
            deleteQuickReplies();
            addUserMessage(message);
            sendMessage(quickReply);
        }
    }

    return (
        <StyledQuickReplies>
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
    sendMessage,
    deleteQuickReplies
})(QuickReplies);