import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../theme';
import QuickRepliesContainer from './QuickRepliesContainer';
import QuickRepliesList from './QuickRepliesList';
import QuickReply from './QuickReply';
import QuickReplyContent from './QuickReplyContent';


const QuickReplies = ({ quickReplies }) => {
    return (
        <QuickRepliesContainer>
            <QuickRepliesList>
                {quickReplies.map((quickReply) => {
                    return (
                        <QuickReply>
                            <QuickReplyContent>
                                {quickReply.text}
                            </QuickReplyContent>
                        </QuickReply>
                    )
                })}
            </QuickRepliesList>
        </QuickRepliesContainer>
    );
}

export default QuickReplies;