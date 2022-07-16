import { createGlobalStyle } from "styled-components";
import Canvas from "./canvas";
import mouseCircle from "~/sketch/mouseCircle";
import trochoid from "~/sketch/trochoid";
import noiseGraph from "~/sketch/noiseGraph";
import lineCircle from "~/sketch/lineCircle";
import circleCycle from "~/sketch/circleCycle";

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

      <h2>Noise Graph</h2>
      <Canvas sketch={noiseGraph} />

      <h2>Line Circle</h2>
      <p>Enter to redraw</p>
      <Canvas sketch={lineCircle} />

      <h2>Circle Cycle</h2>
      <p>
        注意:
        Enterで画像を無限に吸えるものの、乱数生成が悪いのかF5しないと似たような画像が生成されます。趣向を変えたい場合F5してください。変えたくない場合はF5を押さないでください。
      </p>
      <p>
        ref:&nbsp;
        <a href="https://note.com/deconbatch/n/nc14219bfacc6">
          周期的パーリンノイズ
        </a>
      </p>
      <Canvas sketch={circleCycle} />

      <footer>
        <p>
          (C) 2022 nanigashi. Apache-2.0 and CC BY-SA 4.0.{" "}
          <a href="https://github.com/akaregi/react-processing">GitHub</a>
        </p>
      </footer>
    </>
  );
};

export default App;
