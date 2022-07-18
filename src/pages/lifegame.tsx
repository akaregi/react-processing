import { Link } from "react-router-dom";
import Canvas from "~/components/canvas";
import lifeGame from "~/sketch/lifeGame";

const LifeGame = () => {
  return (
    <>
      <h2>Conway's Game of Life</h2>
      <p>
        <Link to={"/"}>戻る</Link>
      </p>
      <p>
        皆様御存知、コンウェイのライフゲームです。組んでみたら素朴な実装すぎて負荷が大きいのでページを分ける羽目になっちゃった。
      </p>
      <p>
        最初はフォン・ノイマン近傍なのかなと思って雑に組んだら吸われて、実はムーア近傍だったっていう。ちゃんとドキュメントを読み込んでから書かないとだめですね。RTFM。
      </p>
      <p>
        <strong>
          ページのどこでもいいのでクリックするとレンダリングが始まります。
        </strong>
        もう一度クリックするとレンダリングを止められます。
      </p>

      <p>凡例（一つ前の状態と比べた時）:</p>
      <ul>
        <li>黒 …… 生存セル</li>
        <li>青 …… 誕生セル</li>
        <li>薄青 …… 死亡セル</li>
      </ul>

      <br />

      <Canvas sketch={lifeGame} />
    </>
  );
};

export default LifeGame;
