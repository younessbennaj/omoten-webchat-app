import styled from 'styled-components';
import defaultTheme from '../../theme';

const QuickReplyContent = styled.div`
    background: transparent;
    border: 1px solid ${({ theme }) => theme.botBubbleColor};
    border-radius: 22px;
    color: ${({ theme }) => theme.botBubbleColor};
    display: inline-block;
    font-size: 16px;
    margin: 3px 2px;
    padding: 8px 16px;
`;

QuickReplyContent.defaultProps = {
    theme: defaultTheme
};

export default QuickReplyContent;