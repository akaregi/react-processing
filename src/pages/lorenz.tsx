import { Link } from "react-router-dom";
import Canvas from "~/components/canvas";
import lorenz from "~/sketch/lorenz";

const Lorenz = () => {
  return (
    <>
      <h2>Lorenz Attractor</h2>
      <p>
        <Link to={"/"}>戻る</Link>
      </p>
      <p>
        <a href="https://ja.wikipedia.org/wiki/ローレンツ方程式">
          よくわからん微分方程式
        </a>
        を雰囲気で解くとこうなるらしい……………
      </p>

      <Canvas sketch={lorenz} />
    </>
  );
};

export default Lorenz;
