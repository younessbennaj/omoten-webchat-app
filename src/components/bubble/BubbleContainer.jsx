import styled from 'styled-components';
import defaultTheme from '../../theme';

const BubbleContainer = styled.div`
    border-radius: 16px;
    padding: 8px 12px;
    color: ${props => props.theme.botFontColor};
    background: ${props => props.theme.botBubbleColor};
`;

// const BubbleContainer = styled.div`
//     border-radius: 16px;

//     padding: 8px 12px;
//     color: ${props => (props.isUser ? props.theme.userFontColor : props.theme.botFontColor)};
//     background: ${props => (props.isUser ? props.theme.userBubbleColor : props.theme.botBubbleColor)};
// `;

BubbleContainer.defaultProps = {
    theme: defaultTheme
};

export default BubbleContainer;