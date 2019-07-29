import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COMMON, LAYOUT, POSITION, BORDERS, TYPOGRAPHY, FLEX } from '../UI/utils/constants';
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

const QuickReplies = ({ content }) => {

    const [displayQuickReplies, setdisplayQuickReplies] = useState(true);

    useEffect(() => {
        // Empty array as second argument
    }, []);

    const handleClick = () => {
        setdisplayQuickReplies(false);
    }

    return (
        <StyledQuickReplies display={displayQuickReplies ? 'flex' : 'none'} justifyContent='flex-end'>
            <ul>
                {content.map((quickReply, i) => {
                    return (
                        <li>
                            <Button.QuickReply onClick={handleClick}>{quickReply.title}</Button.QuickReply>
                        </li>
                    )
                })}
            </ul>
        </StyledQuickReplies>
    );
}

export default QuickReplies;