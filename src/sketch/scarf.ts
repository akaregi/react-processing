import p5 from "p5";
import range from "just-range";

const dimension = 1000;

const scarf = (p: p5) => {
  let state = false;

  p.setup = () => {
    // canvas
    p.createCanvas(dimension, dimension);
    p.frameRate(1);

    p.strokeWeight(3);
  };

  p.draw = () => {
    // reset the canvas
    p.background("#fff");

    for (const deg of range(0, 720)) {
      const radian = deg * (Math.PI / 180);

      const R = 500;

      const noise = p.noise(deg / 64) * 1.1;

      const innerX = (R / 2) * Math.cos(radian) + dimension / 2;
      const innerY = (R / 2) * Math.sin(radian) + dimension / 2;
      const innerNoise = p.noise(innerX, innerY);

      const inner = {
        x: innerX * innerNoise,
        y: innerY * innerNoise,
      };

      const outer = {
        x: noise * R * Math.cos(radian) + dimension / 2,
        y: noise * R * Math.sin(radian) + dimension / 2,
      };

      p.stroke(state ? "#FF006333" : "#0078AA33");
      p.line(inner.x, inner.y, outer.x, outer.y);

      state = !state;
    }
  };
};

export default scarf;
