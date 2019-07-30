import React, { useState } from 'react';
import CardItem from '../card';
import CarouselContainer from './CarouselContainer';
import SliderContainer from './SliderContainer';
import Arrow from './Arrow';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const QuickReplies = ({ carousel }) => {

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
        <SliderContainer>
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
                        <CardItem key={i} card={card}></CardItem>
                    )
                })}
            </CarouselContainer>
        </SliderContainer>
    );
}

export default QuickReplies;