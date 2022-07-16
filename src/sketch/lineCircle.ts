import p5 from "p5";
import range from "just-range";

const dimension = 500;

const noiseGraph = (p: p5) => {
  p.setup = () => {
    // canvas
    p.createCanvas(dimension, dimension);
    p.frameRate(60);
  };

  p.draw = () => {
    // reset the canvas
    p.background("#fff");

    for (const deg of range(0, 360)) {
      const radian = deg * (Math.PI / 180);

      const R = 200;

      const inner = {
        x: (R / 2) * Math.cos(radian) + dimension / 2,
        y: (R / 2) * Math.sin(radian) + dimension / 2,
      };

      const outer = {
        x: R * Math.cos(radian) + dimension / 2,
        y: R * Math.sin(radian) + dimension / 2,
      };

      p.line(inner.x, inner.y, outer.x, outer.y);
    }
  };
};

export default noiseGraph;
