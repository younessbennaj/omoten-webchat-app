import React from 'react';
import QuickRepliesContainer from './QuickRepliesContainer';
import QuickRepliesList from './QuickRepliesList';
import QuickReply from './QuickReply';
import QuickReplyContent from './QuickReplyContent';


const QuickReplies = ({ quickReplies }) => {
    return (
        <QuickRepliesContainer>
            <QuickRepliesList className="d-flex justify-content-end">
                {quickReplies.map((quickReply, i) => {
                    return (
                        <QuickReply key={i}>
                            <QuickReplyContent key={i}>
                                {quickReply.title}
                            </QuickReplyContent>
                        </QuickReply>
                    )
                })}
            </QuickRepliesList>
        </QuickRepliesContainer>
    );
}

export default QuickReplies;