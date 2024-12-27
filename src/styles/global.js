import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
  }

  h1 {
    font-size: 24px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #555;
  }
`;

export default GlobalStyle;