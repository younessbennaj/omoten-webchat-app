import React, { useState } from 'react';
import styled from 'styled-components';
import CardItem from '../card';
import { Box } from '../UI';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CarouselContainer = styled(Box)`
    position: absolute;
    transform: translateX(${props => {
        return props.currentIndex * -(100 / props.items);
    }}%);
    transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

const Arrow = styled.div`
    top: 50%;
    z-index: 1;
    left: ${props => {
        if (props.direction === 'left') {
            return 0;
        }
    }};
    right: ${props => {
        if (props.direction === 'right') {
            return 0;
        }
    }};
`;

const Carousel = ({ carousel }) => {

    let index = 0;

    const [currentIndex, setIndex] = useState(index);

    function nextIndex() {
        setIndex((nextIndex) => {
            return nextIndex + 1;
        });
    }

    function previousIndex() {
        setIndex((prevIndex) => {
            return prevIndex - 1;
        });
    }

    return (
        <Box width={300} height={275} overflow="hidden" position="relative">
            <Arrow className='position-absolute' direction='left'>
                <button onClick={previousIndex} className="btn btn-primary" disabled={currentIndex === 0}>
                    <FaArrowLeft />
                </button>
            </Arrow>
            <Arrow className='position-absolute' direction='right'>
                <button onClick={nextIndex} className="btn btn-primary" disabled={currentIndex === (carousel.length - 1)}>
                    <FaArrowRight />
                </button>
            </Arrow>
            <CarouselContainer className="d-flex flex-row" currentIndex={currentIndex} items={carousel.length}>
                {carousel.map((card, i) => {
                    return (
                        <CardItem size="x-small" key={i} card={card}></CardItem>
                    )
                })}
            </CarouselContainer>
        </Box>
    );
}

export default Carousel;