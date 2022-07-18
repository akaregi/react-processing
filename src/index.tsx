import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import LifeGame from "./pages/lifegame";

import App from "./pages/mainpage";

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

const root = () => {
  return (
    <>
      <GlobalStyle />
      <header>
        <h1>Processing(p5.js) with React</h1>
      </header>
      <p>Hyperthink intensifies</p>
      <p>
        <strong>¡¡¡あんた超注意!!!</strong>&nbsp;
        このサイトはスマホで遊ぶことをウンボのウの字ほどにも考えておらず、スマホで遊ぼうとするとあんたは
        &nbsp;<i>INHALE INTENSIFIES</i>{" "}
        効果を付与されてしまいます。パソコンないしパソコン相当の何某で遊んでみてください。
      </p>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="lifegame" element={<LifeGame />} />
        </Routes>
      </BrowserRouter>

      <footer>
        <p>
          (C) 2022 nanigashi. Apache-2.0 and CC BY-SA 4.0.&nbsp;
          <a href="https://github.com/akaregi/react-processing">GitHub</a>
        </p>
      </footer>
    </>
  );
};

createRoot(document.getElementById("app")!).render(root());
