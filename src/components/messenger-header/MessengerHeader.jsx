import React from 'react';
import styled from 'styled-components';
import Avatar from '../avatar/Avatar';
import { FaTimes } from "react-icons/fa";

const ClosingButton = styled.button`
    margin-right: 22px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;
    border-radius: 100%;
    width: 35px;
    height: 35px;
    font-size: 18px;
    color: ${({ theme }) => theme.color};
`;

const HeaderWrapper = styled.div`
    height: 60px;
    color: ${({ theme }) => theme.color};
    box-shadow: 0 15px 25px -13px rgba(0,0,0,.13);
    padding: 0 .8rem;
`;

const MessengerHeader = () => {
    return (
        <HeaderWrapper className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <Avatar size="33px" />
                <div>
                    <div style={{ 'paddingLeft': '10px' }}>Hotel Digital Assistant</div>
                </div>
            </div>
            <ClosingButton>
                <FaTimes />
            </ClosingButton>
        </HeaderWrapper>
    );
}

export default MessengerHeader;