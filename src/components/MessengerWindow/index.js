import React, { useEffect } from 'react';
import styled from 'styled-components';
import MessageList from '../message-list/MessageList';
import QuickReplies from '../QuickReplies';
import { Flex, Box } from '../UI';

const MessengerWindowContainer = styled(Flex)({
    flexDirection: 'column',
    position: 'relative',
    height: '100%',
    flexGrow: '1',
    flexShrink: '1'
});

MessengerWindowContainer.defaultProps = {
    bg: "white"
};

//MessengerWindowMessages Style 

const MessengerWindowMessages = styled(Flex)({
    flexDirection: 'column',
    overflowX: 'hidden',
    overflowY: 'scroll'
});

//QuickRepliesContainer Styel 

const QuickRepliesContainer = styled(Box)({
});

QuickRepliesContainer.defaultProps = {
    p: 3,
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    bg: 'transparent'
}


const MessengerWindow = ({ messages, quickReplies }) => {
    //Auto scroll to the end of the message list when a new message is added
    let messagesEnd;
    let quickRepliesWrapper;
    useEffect(() => {
        messagesEnd.scrollIntoView({ behaviour: "smooth" });
    }, [messages, quickReplies]);

    const handleScroll = (e) => {
        let element = e.target

        //Lorque l'utilisateur scroll on met l'opacité à 0
        //Lorsqu'il scroll jusqu'en bas on la passe à 1
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            quickRepliesWrapper.style.opacity = '1';
        } else {
            quickRepliesWrapper.style.opacity = '0';
        }
    };

    return (
        <MessengerWindowContainer>
            <MessengerWindowMessages onScroll={handleScroll}>
                <Flex
                    flexDirection='column'
                    p="24px"
                    pb={quickReplies.length ? "86px" : '0px'}
                >
                    <MessageList messages={messages}>
                    </MessageList>
                </Flex>
                <div ref={(element) => { messagesEnd = element; }}></div>
                <QuickRepliesContainer ref={(element) => { quickRepliesWrapper = element; }}>
                    {quickReplies.map((quickReply, i) => {
                        return <QuickReplies key={i} content={quickReply.content}></QuickReplies>
                    })}
                </QuickRepliesContainer>
            </MessengerWindowMessages>
        </MessengerWindowContainer>
    )
}

export default MessengerWindow;