import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Input } from '../UI';

//Messenger Input Style 

const MessengerInputContainer = styled(Box)({
});

const StyledInput = styled(Input)({
    width: '100%'
})

const MessengerInput = ({ addUserMessage, sendMessage }) => {
    const { value: content, reset: resetContent, bind: bindContent } = useInput('');
    const { value: type, bind: bindType } = useInput('text');

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        addUserMessage({ content, type });
        sendMessage({ type, value: content })
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