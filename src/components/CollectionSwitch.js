import React, { useState } from "react";
import styled from "styled-components";

const collections = [
  { id: 1, name: "Series 10" },
  { id: 2, name: "Hermès" },
  { id: 3, name: "SE" },
];

const CollectionSwitch = ({ onSwitch }) => {
  const [selectedCollection, setSelectedCollection] = useState(collections[0]);

  const handleSwitch = (collection) => {
    setSelectedCollection(collection);
    onSwitch(collection);
  };

  return (
    <Wrapper>
      <h1>Switch Collection</h1>
      <Dropdown>
        {collections.map((collection) => (
          <Option
            key={collection.id}
            selected={collection.id === selectedCollection.id}
            onClick={() => handleSwitch(collection)}
          >
            {collection.name}
          </Option>
        ))}
      </Dropdown>
      <p>Selected Collection: {selectedCollection.name}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const Dropdown = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Option = styled.div`
  padding: 10px 20px;
  border: 2px solid ${(props) => (props.selected ? "blue" : "#ccc")};
  cursor: pointer;
`;

export default CollectionSwitch;