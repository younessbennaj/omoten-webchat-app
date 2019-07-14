import styled from 'styled-components';

const CarouselContainer = styled.div`
    position: absolute;
    transform: translateX(${props => {
        return props.currentIndex * -(100 / props.items);
    }}%);
    transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

export default CarouselContainer;