import React from "react";
import styled from "styled-components";
import { toPng } from "html-to-image";

const SaveShare = ({ config }) => {
  const handleSave = () => {
    const element = document.getElementById("preview");
    toPng(element)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "custom-watch.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => console.error("Failed to save image", err));
  };

  const handleShare = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("config", JSON.stringify(config));
    navigator.clipboard.writeText(url.toString());
    alert("Shareable link copied to clipboard!");
  };

  return (
    <Wrapper>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleShare}>Share</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

export default SaveShare;