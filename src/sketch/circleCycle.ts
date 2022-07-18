import p5 from "p5";
import range from "just-range";
import random from "just-random";
import dayjs from "dayjs";
import { getCoordinate, keyRedraw, writeLine } from "~/util/p5util";

const DIMENSION = 1000;
const ALIGN = DIMENSION / 2;

const circleCycle = (p: p5) => {
  const colors = [
    {
      // blue
      a: "#1363DF",
      b: "#47B5FF",
    },
    {
      // red
      a: "#FF7BA9",
      b: "#F94C66",
    },
    {
      // green
      a: "#65C18C",
      b: "#C1F4C5",
    },
  ];

  let color = random(colors)!;

  let innerRange = 100;
  let outerRange = 100;

  p.setup = () => {
    p.createCanvas(DIMENSION, DIMENSION);
    p.noLoop();

    p.strokeCap(p.SQUARE);
  };

  p.draw = () => {
    // reset the canvas
    p.background("#fff");

    color = random(colors)!;

    // circle
    p.strokeWeight(2);
    p.stroke(color.a);
    p.fill(color.a);
    render(p, range(0, 360, 2));

    p.stroke(color.b);
    p.fill(color.b);
    render(p, range(1, 360, 2));

    // text
    p.strokeWeight(1);
    p.textSize(24);
    p.noStroke();
    p.fill(color.a);
    p.text("CIRCLE CYCLE", 30, 40);

    p.textSize(16);
    p.text(`(inner-R: ${innerRange}, outer-R: ${outerRange})`, 30, 60);
    p.text(`by nanigashi. Created at ${dayjs().format()}`, 30, 80);
  };

  p.keyTyped = () => keyRedraw(p, "x", "circleCycle");

  function render(p: p5, degrees: number[]): void {
    innerRange = random(range(100, 300, 50)) || 100;
    outerRange = random(range(500, 700, 50)) || 100;

    for (const deg of degrees) {
      const randomN = Math.floor(Math.random() * 100);

      const rad = p.radians(deg);

      const noise = p.noise(
        p.noise(Math.cos(randomN + rad), Math.sin(randomN + rad))
      );

      const start = getCoordinate(rad, innerRange, ALIGN);

      const _end = getCoordinate(rad, outerRange);
      const end = {
        x: _end.x * noise + ALIGN,
        y: _end.y * noise + ALIGN,
      };

      writeLine(p, { start, end });
    }
  }
};

export default circleCycle;
