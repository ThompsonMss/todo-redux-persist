import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    -webkit-font-soomething: antialiased;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;