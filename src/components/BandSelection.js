import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bands = [
  { id: 1, type: "Solo Loop", color: "Red" },
  { id: 2, type: "Braided Loop", color: "Blue" },
];

const BandSelection = () => {
  const [selectedBand, setSelectedBand] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <h1>Select Your Band</h1>
      <Slider {...settings}>
        {bands.map((band) => (
          <Card
            key={band.id}
            onClick={() => setSelectedBand(band)}
            selected={selectedBand?.id === band.id}
          >
            <p>{band.type}</p>
            <p>{band.color}</p>
          </Card>
        ))}
      </Slider>
      <Preview>
        {selectedBand ? (
          <p>
            Selected: {selectedBand.type} - {selectedBand.color}
          </p>
        ) : (
          <p>Select a band to see the preview</p>
        )}
      </Preview>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
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

export default BandSelection;