import p5 from "p5";
import range from "just-range";

const dimension = 1000;
const align = dimension / 2;
const R = 600;

const circleCycle = (p: p5) => {
  p.setup = () => {
    p.createCanvas(dimension, dimension);
    p.noLoop();

    p.strokeCap(p.SQUARE);
  };

  p.draw = () => {
    // reset the canvas
    p.background("#fff");

    // circle
    p.strokeWeight(2);
    p.stroke("#1363DF");
    render(p, range(0, 360, 2));

    p.stroke("#47B5FF");
    render(p, range(1, 360, 2));

    // text
    p.strokeWeight(1);
    p.textSize(24);
    p.noStroke();
    p.fill("#2155CD");
    p.text("nanigashi: Circle Cycle", 30, 40);
  };

  p.keyTyped = () => {
    if (p.keyCode === p.ENTER) {
      console.log("circleCycle: redraw()");

      p.redraw();
    }
  };
};

function render(p: p5, degrees: number[]): void {
  const random = Math.floor(Math.random() * 10000);

  for (const rad of degrees.map((deg) => p.radians(deg))) {
    const noise = p.noise(
      p.noise(Math.cos(rad) + random, Math.sin(rad) + random) * 2
    );

    const inner = {
      x: (R / 4) * Math.cos(rad) + align,
      y: (R / 4) * Math.sin(rad) + align,
    };

    const outer = {
      x: noise * R * Math.cos(rad) + align,
      y: noise * R * Math.sin(rad) + align,
    };

    p.line(inner.x, inner.y, outer.x, outer.y);
  }
}

export default circleCycle;
