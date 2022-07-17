import p5 from "p5";
import range from "just-range";
import random from "just-random";
import dayjs from "dayjs";

const dimension = 1000;
const align = dimension / 2;

const circleCycle = (p: p5) => {
  let color: { a: string; b: string } = {
    // blue
    a: "#1363DF",
    b: "#47B5FF",
  };

  let innerRange = 100;
  let outerRange = 100;

  p.setup = () => {
    p.createCanvas(dimension, dimension);
    p.noLoop();

    p.strokeCap(p.SQUARE);
  };

  p.draw = () => {
    // reset the canvas
    p.background("#fff");

    // noise
    p.noiseSeed(p.random(1, 100));

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

  p.keyTyped = () => {
    if (p.keyCode === p.ENTER) {
      console.debug("circleCycle: redraw()");

      p.redraw();
    }
  };

  function render(p: p5, degrees: number[]): void {
    innerRange = random(range(100, 300, 50)) || 100;
    outerRange = random(range(500, 700, 50)) || 100;

    for (const deg of degrees) {
      const randomN = Math.floor(Math.random() * 100);

      const rad = p.radians(deg);

      const noise = p.noise(
        p.noise(Math.cos(randomN + rad), Math.sin(randomN + rad)) * 1
      );

      const inner = {
        x: innerRange * Math.cos(rad) + align,
        y: innerRange * Math.sin(rad) + align,
      };

      const outer = {
        x: noise * outerRange * Math.cos(rad) + align,
        y: noise * outerRange * Math.sin(rad) + align,
      };

      p.line(inner.x, inner.y, outer.x, outer.y);
    }
  }
};

export default circleCycle;
