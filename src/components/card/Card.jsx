import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    flex: 1;
    min-width: 16rem;
    max-width: 16rem;
`;

const Card = ({ card: { title, text, image, buttons } }) => {
    return (
        <CardContainer className="card shadow-sm mr-1">
            <img src={image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
            <ul className="list-group list-group-flush">
                {buttons.map(button => {
                    return (
                        <li className="list-group-item text-center">
                            <a href={"www.google.com"} className="text-center">{button.title}</a>
                        </li>
                    )
                })}
            </ul>
        </CardContainer>
    );
}

export default Card;