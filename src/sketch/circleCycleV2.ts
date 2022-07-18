import p5 from "p5";
import dayjs from "dayjs";
import range from "just-range";

const DIMENSION = 1000;
const ALIGN = DIMENSION / 2;

const R = 600;

const circleCycleV2 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(DIMENSION, DIMENSION);
    p.noLoop();
  };

  p.draw = () => {
    // reset the canvas
    p.background("#fff");

    // render
    range(0, 360, 1.5);
    render(range(0, 360, 2), Math.random(), "#495C83");
    render(range(1, 360, 2), Math.random(), "#3330E4");

    // text
    p.strokeWeight(1);
    p.textSize(24);
    p.noStroke();
    p.fill("#3330E4");
    p.text("CIRCLE CYCLE V2", 30, 40);

    p.textSize(16);
    p.text(`by nanigashi. Created at ${dayjs().format()}`, 30, 60);
  };

  p.keyTyped = () => {
    if (p.keyCode === p.ENTER) {
      console.debug("circleCycleV2: redraw()");

      p.redraw();
    }
  };

  function render(range: number[], rN: number, color: string) {
    p.strokeWeight(2);
    p.strokeCap(p.SQUARE);

    for (const deg of range) {
      const rad = p.radians(deg);

      const nX = rN * 10000 + (R / 4) * Math.cos(rad) * 0.005;
      const nY = rN * 10000 + (R / 4) * Math.sin(rad) * 0.005;

      const noise = p.noise(nX, nY);

      const inner = {
        x: (R / 2) * Math.cos(rad) + ALIGN,
        y: (R / 2) * Math.sin(rad) + ALIGN,
      };

      const outer = {
        x: noise * R * Math.cos(rad) + ALIGN,
        y: noise * R * Math.sin(rad) + ALIGN,
      };

      p.stroke(color);
      p.line(inner.x, inner.y, outer.x, outer.y);
    }
  }
};

export default circleCycleV2;
