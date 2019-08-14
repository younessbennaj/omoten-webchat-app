import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Input } from '../UI';

//Messenger Input Style 

const MessengerInputContainer = styled(Box)({
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    right: '0px',
    height: '48px'
});

const StyledInput = styled(Input)({
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    width: '100%'
})

const MessengerInput = ({ addUserMessage, sendUserMessage }) => {
    const { value: content, reset: resetContent, bind: bindContent } = useInput('');
    const { value: type, bind: bindType } = useInput('text');

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        addUserMessage({ content, type });
        sendUserMessage({ content, type });
        resetContent();
    }

    return (
        <MessengerInputContainer>
            <form onSubmit={handleMessageSubmit}>
                <StyledInput placeholder="Répondre" {...bindContent} />
                <input type="hidden" {...bindType}></input>
            </form>
        </MessengerInputContainer>
    )
};

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        }
    };
};

export default MessengerInput;