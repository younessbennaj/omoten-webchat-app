import styled from 'styled-components';

const QuickReplyContent = styled.div`
    background: transparent; 
    border: 1px solid ${({ theme }) => theme.bubbleColor};
    border-radius: 22px;
    color: ${({ theme }) => theme.bubbleColor};
    display: inline-block;
    font-size: 16px;
    margin: 3px 2px;
    padding: 8px 16px;
`;

export default QuickReplyContent;