import React, { useState } from "react";
import styled from "styled-components";

const sizes = ["42mm", "46mm"];

const SizeSelection = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <Wrapper>
      <h1>Select Watch Size</h1>
      <ToggleGroup>
        {sizes.map((size) => (
          <Toggle
            key={size}
            onClick={() => setSelectedSize(size)}
            selected={selectedSize === size}
          >
            {size}
          </Toggle>
        ))}
      </ToggleGroup>
      <Preview>
        {selectedSize ? (
          <p>Selected Size: {selectedSize}</p>
        ) : (
          <p>Select a size to see the preview</p>
        )}
      </Preview>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const ToggleGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Toggle = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${(props) => (props.selected ? "blue" : "#ccc")};
  color: white;
  border: none;
  cursor: pointer;
`;

const Preview = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;

export default SizeSelection;