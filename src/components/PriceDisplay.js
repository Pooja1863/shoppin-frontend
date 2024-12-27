import React from "react";
import styled from "styled-components";

const PriceDisplay = ({ basePrice, casePrice, bandPrice }) => {
  const totalPrice = basePrice + casePrice + bandPrice;

  return (
    <Wrapper>
      <h1>Price Summary</h1>
      <PriceDetails>
        <p>Base Price: ${basePrice}</p>
        <p>Case: ${casePrice}</p>
        <p>Band: ${bandPrice}</p>
        <Total>Total: ${totalPrice}</Total>
      </PriceDetails>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const PriceDetails = styled.div`
  margin-top: 10px;
  font-size: 18px;
`;

const Total = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export default PriceDisplay;