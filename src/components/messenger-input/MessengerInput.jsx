import React, { useState } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    box-shadow: 0 4px 23px 0 rgba(0,0,0,.15);
    padding: 10px;
`;
const MessengerInput = ({ addUserMessage, sendTextQueryMessage }) => {

    const { value: content, reset: resetContent, bind: bindContent } = useInput('');
    const { value: type, bind: bindType } = useInput('text');

    const handleMessageSubmit = e => {
        e.preventDefault();
        addUserMessage({ content, type });
        sendTextQueryMessage(content);
        resetContent();
    }

    return (
        <InputWrapper>
            <Box
            >
                Hello
            </Box>
            <form onSubmit={handleMessageSubmit}>
                <label style={{ color: '#9A9A9A' }}>Reply to Hotel Digital Assistant</label>
                <input placeholder="Répondre" type="text" className="form-control" {...bindContent}></input>
                <input type="hidden" {...bindType}></input>
            </form>
        </InputWrapper>
    );
}

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