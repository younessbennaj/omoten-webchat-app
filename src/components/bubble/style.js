import styled from 'styled-components';
import defaultTheme from '../../theme';

const Bubble = styled.div`
    border-radius: ${props => {
        return props.isUser ? '20px 20px 0px 20px' : '20px 20px 20px 0px';
    }};
    color: ${props => (props.isUser ? props.theme.userFontColor : props.theme.botFontColor)};
    background: ${props => (props.isUser ? props.theme.userBubbleColor : props.theme.botBubbleColor)};
`;

const BubbleBodyWrapper = styled.div` 
    
`;

const BubbleBody = styled.div` 
    padding: 8px 12px;
    background: ${props => (props.isUser ? props.theme.userBubbleColor : props.theme.botBubbleColor)};
`;

export const Paragraph = styled.p`
    margin: 0;
    display: block;
    font-size: 16px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;