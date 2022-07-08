import { createGlobalStyle } from "styled-components";
import mouseCircle from "~/sketch/mouseCircle";
import trochoid from "~/sketch/trochoid";
import Canvas from "./canvas";

const GlobalStyle = createGlobalStyle`
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

hr {
  margin: 3rem 0;
  border-width: 0;
  border-top: 1px dotted #30b8cd;
}

section {
  display: flex;
  justify-content: center;
}

canvas.p5Canvas {
  border: 1px solid #30b8cd;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />

      <header>
        <h1>Processing(p5.js) with React</h1>
      </header>

      <p>Hyperthink intensifies</p>

      <h2>Trochoid</h2>
      <Canvas sketch={trochoid} />

      <h2>Mouse circle</h2>
      <Canvas sketch={mouseCircle} />

      <footer>
        <p>(C) 2022 nanigashi. CC BY-SA 4.0</p>
      </footer>
    </>
  );
};

export default App;