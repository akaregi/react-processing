import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  max-width: 768px;

  margin: 0 auto;
  padding: 0 1rem;

  font-size: 20px;
  font-family: sans-serif;
  color: #333;
}

header, footer {
  margin: 3rem 0;
}

h2 {
  margin-top: 2rem;
  padding-top: 0.5rem;
  border-top: 1px solid #ccc;
}

section {
  display: flex;
  justify-content: center;
}

p, ul {
  margin: 0.5rem;
}

canvas.p5Canvas {
  border: 1px solid #30b8cd;
}
`;
