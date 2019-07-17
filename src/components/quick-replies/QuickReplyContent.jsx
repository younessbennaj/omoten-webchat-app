import styled from 'styled-components';

const QuickReplyContent = styled.div`
    background: transparent; 
    border: 1px solid ${({ theme }) => theme.quickRepliesBorder};
    border-radius: 22px;
    color: ${({ theme }) => theme.quickRepliesColor};
    display: inline-block;
    font-size: 16px;
    margin: 3px 2px;
    padding: 8px 16px;

    :hover {
        background: ${({ theme }) => theme.quickRepliesBackgroud};
        color: ${({ theme }) => theme.quickReplisInvertColor};
    }
`;

export default QuickReplyContent;