import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-image: url("/bg.jpg");
    min-height: 100vh;
    background-size: cover;
    font-family: 'Be Vietnam Pro', sans-serif;
    color: #E2E4F3;
  }

  @media (max-width: 600px) {
    body {
      background-image: url("/bg-sm.jpg");
  }
}

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  #root {
    display: grid;
    place-items: center;
    min-height: 100vh;
    padding: 20px;
  }
`;

export default GlobalStyle;
