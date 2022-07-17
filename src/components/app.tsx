import { createGlobalStyle } from "styled-components";
import Canvas from "./canvas";
import mouseCircle from "~/sketch/mouseCircle";
import trochoid from "~/sketch/trochoid";
import noiseGraph from "~/sketch/noiseGraph";
import lineCircle from "~/sketch/lineCircle";
import circleCycle from "~/sketch/circleCycle";
import barcode from "~/sketch/barcode";

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

p {
  margin: 0.5rem;
  text-indent: 1rem;
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
      <p>
        <strong>¡¡¡あんた超注意!!!</strong>&nbsp;
        このサイトはスマホで遊ぶことをウンボのウの字ほどにも考えておらず、スマホで遊ぼうとするとあんたは
        &nbsp;<i>INHALE INTENSIFIES</i>{" "}
        効果を付与されてしまいます。パソコンないしパソコン相当の何某で遊んでみてください。
      </p>
      <p>
        <strong>
          レンダリング面積が大きい作品は折りたたまれているので、適量展開してください。
        </strong>
      </p>
      <h2>Trochoid</h2>
      <p>
        p5.jsの入門にとトロコイドとかいう普通に数学的に難しい内容を扱ったので出来がかなり悪い
      </p>
      <details>
        <summary>出来が悪いので格納</summary>
        <Canvas sketch={trochoid} />
      </details>
      <h2>Mouse circle</h2>
      <p>
        ドラッグし続けるといい感じのほわほわが出てきて消えちゃいます。ドラッグする意味ある？っていう哲学的問いをあんたに押し付けるものです。
      </p>
      <Canvas sketch={mouseCircle} />
      <h2>Noise Graph</h2>
      <p>
        パーリンノイズに沿ってグラフ状に乱数を生成し続けるやつです。パーリンノイズは連続してるふうに見える乱数を生成してくれるので、グラフも一様乱数だと滅茶苦茶なのがこのグラフは連続してるように見えるはずです。
      </p>
      <p>
        工夫すればろローソク足チャートめいたの作れそうだよね。近く作ります。ところで何故蝋燭（ろうそく）ではなくローソクなのか？これも調べる必要がありますがここでは扱いたくない。
      </p>
      <Canvas sketch={noiseGraph} />
      <h2>Line Circle</h2>
      <p>
        なんというか見ての通りのアレとしか言いようがありません。円形に生成したパーリンノイズのそれと言ったら通じるかな？通じたらとても嬉しい。
      </p>
      <p>
        Enterで無限に再生成できます。しかし覚えておかなければなりません。一度生成して保存しなかった画像はF5なりEnterを押すと消えてしまい二度と蘇ることがありません。本当に押しますか？それを？
      </p>
      <details>
        <summary>大きいので格納</summary>
        <Canvas sketch={lineCircle} />
      </details>
      <h2>Circle Cycle</h2>
      <p>
        周期性のあるパーリンノイズというのを扱いたくて設計したものです。まず、普通のパーリンノイズは当然ながら特定地点で同じ数列が繰り返されるということはないんですよ。何が問題かって、
        <i>Line Circle</i>&nbsp;
        みたいに円形に組む時、支点と終点が連続しないので乱数生成によっては断崖絶壁が生じて見栄えが良くない。
      </p>
      <p>
        で、ref
        に示している通りパーリンノイズの乱数源に円を用いると周期性のあるノイズを作れるっていう話があった。円は一周回れば元の位置に戻るので当然周期性がある。これを上手いこと組み合わせれば周期性のあるパーリンノイズが実現できるっていう話らしいんですが。私はアヒルなんでよくわかりませんでした。
      </p>
      <p>
        ref:&nbsp;
        <a href="https://note.com/deconbatch/n/nc14219bfacc6">
          周期的パーリンノイズ
        </a>
      </p>
      <details>
        <summary>大きいので格納</summary>
        <Canvas sketch={circleCycle} />
      </details>

      <h2>Barcode</h2>
      <p>
        バーコード的な何か。Enterで再生成できます。4値の200桁なので結構な組み合わせになるが、実用性はまるでないと思う。この世のバーコードは思った以上によくできている。
      </p>
      <Canvas sketch={barcode} />

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
