import React from 'react';
import QuickRepliesContainer from './QuickRepliesContainer';
import QuickRepliesList from './QuickRepliesList';
import QuickReply from './QuickReply';
import QuickReplyContent from './QuickReplyContent';

//Ajouter un state qui permet d'afficher ou non la replies une fois cliqué
//Ne pas ajouter les messages de type quick replies à la database

const QuickReplies = ({ content }) => {
    const handleClick = (e) => {
        console.log(e);
    };

    return (
        <QuickRepliesContainer>
            <QuickRepliesList className="d-flex justify-content-end">
                {content.map((quickReply, i) => {
                    return (
                        <QuickReply key={i} onClick={handleClick}>
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