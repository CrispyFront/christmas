import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NeoDunggeunmo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.3/NeoDunggeunmo.woff') format('woff');
    font-weight: ${theme.fontWeight.normal};
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'NeoDunggeunmo';
    &::-webkit-scrollbar {
      display: none; 
    }
  }

  html,
  body {
    background-image: url();
  }

  button{
    cursor: pointer;
    all: unset;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;