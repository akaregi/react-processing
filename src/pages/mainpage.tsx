import { Link } from "react-router-dom";
import Canvas from "../components/canvas";
import mouseCircle from "~/sketch/mouseCircle";
import trochoid from "~/sketch/trochoid";
import noiseGraph from "~/sketch/noiseGraph";
import barcode from "~/sketch/barcode";

const App = () => {
  return (
    <>
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

      <h2>Barcode</h2>
      <p>
        バーコード的な何か。Enterで再生成できます。4値の200桁なので結構な組み合わせになるが、実用性はまるでないと思う。この世のバーコードは思った以上によくできている。
      </p>
      <p>
        <kbd>Z</kbd>で再生成できます。
      </p>
      <Canvas sketch={barcode} />

      <h2>CIRCLES</h2>
      <p>
        <Link to={"/circles"}>
          まあまあ負荷がかかるので別ページに分離しています
        </Link>
        。
      </p>

      <h2>SPHERES</h2>
      <p>
        <Link to={"/spheres"}>3Dなのでマジで重いんですよ、別ページです</Link>。
      </p>

      <h2>Conway's Game of Life</h2>
      <p>
        <Link to={"/lifegame"}>
          まあまあ負荷がかかるので別ページに分離しています
        </Link>
        。
      </p>

      <h2>Lorenz Attractor</h2>
      <p>
        <Link to={"/lorenz"}>3Dなのでマジで重いんですよ、別ページです</Link>。
      </p>
    </>
  );
};

export default App;
