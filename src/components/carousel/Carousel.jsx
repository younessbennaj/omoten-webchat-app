import React, { useState } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../theme';
import Card from '../card/Card';
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
        <SliderContainer className="mb-3">
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
                {carousel.map(card => {
                    return (
                        <Card card={card}></Card>
                    )
                })}
            </CarouselContainer>
        </SliderContainer>
    );
}

export default QuickReplies;