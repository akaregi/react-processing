import p5 from "p5";
import range from "just-range";
import { getCoordinate, keyRedraw, writeLine } from "~/util/p5util";

const DIMENSION = 1000;
const ALIGN = DIMENSION / 2;
const R = 600;

const lineCircle = (p: p5) => {
  p.setup = () => {
    p.createCanvas(DIMENSION, DIMENSION);
    p.noLoop();
  };

  p.draw = () => {
    // reset the canvas
    p.background("#fff");

    p.strokeWeight(4);
    p.strokeCap(p.SQUARE);

    const randomOdd = Math.random() * 10000;
    const randomEven = Math.random() * 10000;

    let state = false;

    for (const deg of range(0, 360, 1.5)) {
      const C = state ? randomEven : randomOdd;

      const rad = p.radians(deg);
      const noise = p.noise(C + deg / 128);

      const start = getCoordinate(rad, R / 3, ALIGN);

      const _end = getCoordinate(rad, R);
      const end = {
        x: _end.x * noise + ALIGN,
        y: _end.y * noise + ALIGN,
      };

      p.stroke(state ? "#1363DF" : "#47B5FF");
      writeLine(p, { start, end });

      state = !state;
    }

    // text
    p.noStroke();

    p.fill("#1363DF");
    p.textSize(24);
    p.text("nanigashi: Line Circle ", 30, 40);
  };

  p.keyTyped = () => keyRedraw(p, "z", "lineCircle");
};

export default lineCircle;
