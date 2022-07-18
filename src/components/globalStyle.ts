import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  max-width: 1000px;

  margin: 0 auto;
  padding: 0 1rem;

  font-size: 20px;
  font-family: sans-serif;
  color: #333;
  
  background-color: #fcfcfc;
}

header, footer {
  margin: 3rem 0;
}

h2 {
  margin-top: 4rem;

  font-size: 2.5rem;
}

section {
  display: flex;
  justify-content: center;

  margin: 1rem 0;
}

p, ul {
  margin: 0.5rem 0;
}

canvas.p5Canvas {
  border: 1px solid #ccc;
}

a {
  color: #2b409b;
  text-decoration: none;
}

a:hover {
  color: #2b409b;
  text-decoration: underline;
}
`;
