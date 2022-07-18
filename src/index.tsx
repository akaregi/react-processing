import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./components/globalStyle";

import App from "./pages/mainpage";
import LifeGame from "./pages/lifegame";

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
