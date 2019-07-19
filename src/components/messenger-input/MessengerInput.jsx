import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
    box-shadow: 0 4px 23px 0 rgba(0,0,0,.15);
    padding: 10px;
`;
const MessengerInput = () => {
    return (
        <InputWrapper class="form-group">
            <label style={{ color: '#9A9A9A' }}>Reply to Hotel Digital Assistant</label>
            <input type="text" class="form-control"></input>
        </InputWrapper>
    );
}

export default MessengerInput;