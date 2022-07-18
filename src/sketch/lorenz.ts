import range from "just-range";
import p5, { Vector } from "p5";

const DIMENSION = 800;

const lorenz = (p: p5) => {
  const points: Vector[] = [];

  let x = 0.01;
  let y = 0.0;
  let z = 0.0;

  const a = 10;
  const b = 28;
  const c = 8 / 3;

  let rotate = 0.01;

  p.setup = () => {
    p.createCanvas(DIMENSION, DIMENSION, p.WEBGL);
    p.noFill();

    for (const _ of range(0, 10000)) {
      const dt = 0.01;
      const dx = a * (y - x) * dt;
      const dy = (x * (b - z) - y) * dt;
      const dz = (x * y - c * z) * dt;

      x = x + dx;
      y = y + dy;
      z = z + dz;

      points.push(new Vector(y, z, x));
    }
  };

  p.draw = () => {
    render(rotate);
    rotate += 0.03;
  };

  p.keyTyped = () => {};

  function render(rotate: number) {
    p.background("#3D3C42");
    p.stroke("#94B49F66");

    p.translate(10, -300, 0);
    p.scale(10);

    p.rotateY(rotate);

    p.beginShape();
    for (const point of points) {
      p.vertex(point.x, point.y, point.z);
    }
    p.endShape();
  }
};

export default lorenz;
