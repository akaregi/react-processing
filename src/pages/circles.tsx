import Canvas from "~/components/canvas";
import circleCycle from "~/sketch/circleCycle";
import circleCycleV2 from "~/sketch/circleCycleV2";
import lineCircle from "~/sketch/lineCircle";

const Circles = () => {
  return (
    <>
      <h2>Line Circle</h2>
      <p>
        なんというか見ての通りのアレとしか言いようがありません。円形に生成したパーリンノイズのそれと言ったら通じるかな？通じたらとても嬉しい。
      </p>
      <p>
        <kbd>Z</kbd>
        で無限に再生成できます。しかし覚えておかなければなりません。一度生成して保存しなかった画像は
        <kbd>F5</kbd>
        なり<kbd>Enter</kbd>
        を押すと消えてしまい二度と蘇ることがありません。本当に押しますか？それを？
      </p>
      <Canvas sketch={lineCircle} />

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
        <kbd>X</kbd>で再生成できます。
      </p>
      <p>
        ref:&nbsp;
        <a href="https://note.com/deconbatch/n/nc14219bfacc6">
          周期的パーリンノイズ
        </a>
      </p>
      <Canvas sketch={circleCycle} />

      <h2>Circle Cycle 改善</h2>
      <p>
        <i>Circle Cycle</i>
        の改善バージョン。乱数の謎を完全に理解し、そして完全な美しさだけを出力する可能性が高まった決定版です。お楽しみください！
      </p>
      <p>
        <kbd>C</kbd>
        でいくらでも再生成できるので好みのそれが見つかるまでがんばってください。色は……どうしてもっていうならソースコードをいじってください。
      </p>
      <Canvas sketch={circleCycleV2} />
    </>
  );
};

export default Circles;
