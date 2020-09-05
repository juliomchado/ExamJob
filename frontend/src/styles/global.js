import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;

    font-family: 'Calibri', sans-serif;
  }

  html, body{
    height: 100vh;
  }

  button {
    outline: none;
    cursor: pointer;
  }
`;
