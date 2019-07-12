import styled from 'styled-components';
import defaultTheme from '../../theme';

const BubbleContainer = styled.div`
    border-radius: ${props => {
        return props.isUser ? '18px 18px 0px 18px' : '18px 18px 18px 0px';
    }};
    font-size: 14px;
    color: ${props => (props.isUser ? props.theme.userFontColor : props.theme.botFontColor)};
    background: ${props => (props.isUser ? props.theme.userBubbleColor : props.theme.botBubbleColor)};
`;

BubbleContainer.defaultProps = {
    theme: defaultTheme
};

export default BubbleContainer;