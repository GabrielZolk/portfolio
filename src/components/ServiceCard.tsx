import React from 'react'
import styled from 'styled-components';

function ServiceCard({ image, title, paragraph }: any) {
    return (
        <ServiceCardStyled >
            <div className="container">
                <img src={image} alt="" />
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
        padding-right: 1.2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        h4{
            color: white;
            font-size: 1.6rem;
            padding: 1rem 0;
            
        }
    }

@media (max-width: 496px) {

 .container {
        display: flex;
        flex-direction: column;
 }

 h4 {
         font-size: 1rem;
            
 }
}
`;

export default ServiceCard;