import { Link } from "react-router-dom";
import Canvas from "~/components/canvas";
import meshSphere from "~/sketch/meshSphere";
import meshSphere3D from "~/sketch/meshSphere3D";

const Spheres = () => {
  return (
    <>
      <h2>SPHERES</h2>
      <p>
        <Link to={"/"}>戻る</Link>
      </p>
      <p>ページが重い。注意。</p>
      <p>
        <i>p5.js</i>のサンプル集にある
        <a href="https://p5js.org/examples/math-random-chords.html">
          Random Chords
        </a>
        から着想を得て作ってみた作品です。
      </p>

      <h2>Mesh Sphere</h2>
      <p>
        <kbd>Z</kbd>で再生/停止。
      </p>
      <Canvas sketch={meshSphere} />

      <h2>Mesh Sphere 3D</h2>
      <p>
        <kbd>X</kbd>で再生/停止。
      </p>
      <Canvas sketch={meshSphere3D} />
    </>
  );
};

export default Spheres;
