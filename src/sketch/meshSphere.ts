import p5 from "p5";

import dayjs from "dayjs";
import random from "just-random";
import range from "just-range";
import { getCoordinate, Line, switchLoop, writeLine } from "~/util/p5util";

const DIMENSION = 1000;
const ALIGN = DIMENSION / 2;

const meshSphere = (p: p5) => {
  const degrees = range(0, 360);
  let lines: Required<Line>[] = [];

  p.setup = () => {
    p.createCanvas(DIMENSION, DIMENSION);
    p.noLoop();
  };

  p.draw = () => {
    render();
  };

  p.keyTyped = () => {
    switchLoop(p, "Z", "meshSphere");
  };

  function render() {
    // init
    p.background("#FFF");

    // circle
    p.noFill();
    p.stroke("#D61C4E66");
    p.ellipse(ALIGN, ALIGN, 800);

    lines = lines.filter((line) => {
      p.stroke(`${line.color}${line.alpha.toString(16)}`);
      writeLine(p, line, ALIGN);

      line.alpha--;

      return line.alpha > 0;
    });

    const sRad = p.radians(random(degrees)!);
    const eRad = p.radians(random(degrees)!);

    lines.push({
      start: getCoordinate(sRad, 400),
      end: getCoordinate(eRad, 400),
      color: "#D61C4E",
      alpha: 200,
    });

    // text
    p.strokeWeight(1);
    p.textSize(24);
    p.noStroke();
    p.fill("#D61C4E");
    p.text("CIRCLE CYCLE V2", 30, 40);

    p.textSize(16);
    p.text(`by nanigashi. Inspired by Aatish Bhatia and Anders Hoff.`, 30, 60);
    p.text(`Created at ${dayjs().format()}`, 30, 80);
  }
};

export default meshSphere;
