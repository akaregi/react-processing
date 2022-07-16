import p5 from "p5";
import range from "just-range";

const dimension = 1000;
const alignment = dimension / 2;

const lineCircle = (p: p5) => {
  p.setup = () => {
    p.createCanvas(dimension, dimension);
    p.noLoop();
  };

  p.draw = () => {
    // reset the canvas
    p.background("#fff");

    // text
    p.strokeWeight(1);
    p.fill("#1363DF");
    p.textSize(24);
    p.text("nanigashi: Line Circle ", 30, 40);

    p.strokeWeight(4);
    p.strokeCap(p.SQUARE);

    const randomOdd = Math.random() * 10000;
    const randomEven = Math.random() * 10000;

    let state = false;

    for (const deg of range(0, 360, 1.5)) {
      const C = state ? randomEven : randomOdd;

      const rad = p.radians(deg);
      const noise = p.noise(C + deg / 128);

      const R = 600;
      const inner = {
        x: (R / 3) * Math.cos(rad) + alignment,
        y: (R / 3) * Math.sin(rad) + alignment,
      };

      const outer = {
        x: noise * R * Math.cos(rad) + alignment,
        y: noise * R * Math.sin(rad) + alignment,
      };

      p.stroke(state ? "#1363DF" : "#47B5FF");
      p.line(inner.x, inner.y, outer.x, outer.y);

      state = !state;
    }
  };

  p.keyTyped = () => {
    if (p.keyCode === p.ENTER) {
      console.log("lineCircle: redraw()");

      p.redraw();
    }
  };
};

export default lineCircle;
