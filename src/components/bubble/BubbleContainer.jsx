import styled from 'styled-components';

const BubbleContainer = styled.div`
    border-radius: 16px;
    padding: 8px 12px;
    color: ${({ theme }) => theme.fontColor};
    background: ${({ theme }) => theme.bubbleColor};
`;

export default BubbleContainer;