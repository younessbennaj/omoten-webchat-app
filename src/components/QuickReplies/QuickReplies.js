import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addUserMessage, sendUserMessage } from '../../actions/messages';
import styled from 'styled-components';
import { flexbox } from 'styled-system';
import Button from '../UI/Button';
import Box from '../UI/Box';

const StyledQuickReplies = styled(Box)`
    > ul {
        list-style-type: none;
        padding: 0 0px;
        margin: 2px 0 0 0;

        > li {
            display: inline-block;
            margin: 0px;
            margin-left: 5px;
        }
    }

`;

StyledQuickReplies.defaultProps = {
    display: 'flex'
};

const QuickReplies = ({ content, messages, addUserMessage }) => {

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
        setdisplayQuickReplies(false);
    }

    return (
        <StyledQuickReplies display={displayQuickReplies ? 'flex' : 'none'} justifyContent='flex-end'>
            <ul>
                {content.map((quickReply, i) => {
                    return (
                        <li key={i}>
                            <Button.QuickReply onClick={() => handleClick(quickReply)}>{quickReply.title}</Button.QuickReply>
                        </li>
                    )
                })}
            </ul>
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