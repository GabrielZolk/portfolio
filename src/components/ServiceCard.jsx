import React from 'react'
import styled from 'styled-components';

function ServiceCard({image, title, paragraph}) {
    return (
        <ServiceCardStyled >
            <div className="container">
                <img src={image} alt=""/>
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled >
    )
}

const ServiceCardStyled = styled.div`
    transition: all .4s ease-in-out;
    &:hover{
        transform: translateY(3px);
    }
    .container{
        padding: 1.2rem;
        h4{
            color: white;
            font-size: 1.6rem;
            padding: 1rem 0;
            
        }
    }
`;

export default ServiceCard;