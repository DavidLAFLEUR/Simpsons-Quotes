import React from 'react';
import styled from "styled-components"; 

const StyledFigure = styled.figure`
  display: flex;
  padding: 1.25em;
  width: 400px;
  border: 1px solid #f8f8f8;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  font-size: 1.2em;
  background-color: #FFFFFF;
`;

const StyledCite = styled.cite`
  margin-left: 50px;
`;

const StyledImg= styled.img`
   max-width: 100px;
  margin-right: 1.5rem;
`;



const QuoteCard = ({data}) => {

 const {quote, character, image} = data[0]


return(
  
  <StyledFigure>
    <StyledImg src={image} alt={character} />
    <figcaption>
      <blockquote>{quote}</blockquote>
      <StyledCite>{character}</StyledCite>
    </figcaption>  
  </StyledFigure>
);
}

export default QuoteCard;
