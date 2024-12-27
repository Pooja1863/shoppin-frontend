import React, { useState } from "react";
import styled from "styled-components";

const cases = [
  { id: 1, material: "Aluminum", color: "Silver" },
  { id: 2, material: "Titanium", color: "Black" },
];

const CaseSelection = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <Wrapper>
      <h1>Select Your Case</h1>
      <Grid>
        {cases.map((watchCase) => (
          <Card
            key={watchCase.id}
            onClick={() => setSelectedCase(watchCase)}
            selected={selectedCase?.id === watchCase.id}
          >
            <p>{watchCase.material}</p>
            <p>{watchCase.color}</p>
          </Card>
        ))}
      </Grid>
      <Preview>
        {selectedCase ? (
          <p>
            Selected: {selectedCase.material} - {selectedCase.color}
          </p>
        ) : (
          <p>Select a case to see the preview</p>
        )}
      </Preview>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  border: 2px solid ${(props) => (props.selected ? "blue" : "#ccc")};
  padding: 20px;
  cursor: pointer;
`;

const Preview = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;

export default CaseSelection;