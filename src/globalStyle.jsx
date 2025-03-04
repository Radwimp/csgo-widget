import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  *,
  *:before,
  *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  :focus,
  :active {
    outline: none;
  }

  a:focus,
  a:active {
    outline: none;
  }

  nav,
  footer,
  header,
  aside {
    display: block;
  }

  html {
    height: 100%;
    width: 100%;
    text-align: center;
    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 2rem;
    color: ${({ theme }) => theme.primaryText};
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }

  input,
  button,
  textarea {
    font-family: inherit;
  }

  input::-ms-clear {
    display: none;
  }

  button {
    cursor: pointer;
    font-weight: 1000;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }
`;

export default GlobalStyle;
