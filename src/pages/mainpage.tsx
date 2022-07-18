import Canvas from "../components/canvas";
import mouseCircle from "~/sketch/mouseCircle";
import trochoid from "~/sketch/trochoid";
import noiseGraph from "~/sketch/noiseGraph";
import lineCircle from "~/sketch/lineCircle";
import circleCycle from "~/sketch/circleCycle";
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

      <h2>LifeGame</h2>
      <p>
        <a href="lifegame">まあまあ負荷がかかるので別ページに分離しています</a>
        。
      </p>
    </>
  );
};

export default App;
