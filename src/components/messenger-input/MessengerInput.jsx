import React, { useState } from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    box-shadow: 0 4px 23px 0 rgba(0,0,0,.15);
    padding: 10px;
`;
const MessengerInput = () => {

    const { value, reset, bind } = useInput('');

    function handleMessageSubmit(e) {
        if (e.key === 'Enter') {
            alert(value);
            reset();
        }
    }

    return (
        <InputWrapper className="form-group">
            <label style={{ color: '#9A9A9A' }}>Reply to Hotel Digital Assistant</label>
            <input type="text" className="form-control" {...bind} onKeyPress={handleMessageSubmit}></input>
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