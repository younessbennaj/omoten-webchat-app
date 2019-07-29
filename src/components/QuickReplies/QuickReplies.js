import React from 'react';
import styled from 'styled-components';
import { COMMON, LAYOUT, POSITION, BORDERS, TYPOGRAPHY, FLEX } from '../UI/utils/constants';
import { flexbox } from 'styled-system';
import Button from '../UI/Button';

const StyledQuickReplies = styled.div`
    ${COMMON}
    ${flexbox}

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

const QuickReplies = ({ content }) => {
    return (
        <StyledQuickReplies justifyContent='flex-end'>
            <ul>
                {content.map((quickReply, i) => {
                    return (
                        <li>
                            <Button.QuickReply>{quickReply.title}</Button.QuickReply>
                        </li>
                    )
                })}
            </ul>
        </StyledQuickReplies>
    );
}

export default QuickReplies;