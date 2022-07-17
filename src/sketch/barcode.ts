import p5 from "p5";
import dayjs from "dayjs";
import random from "just-random";
import range from "just-range";

const barcode = (p: p5) => {
  const width = 1000;

  const values = [
    { color: "#F15412", h: 3 }, // red
    { color: "#001D6E", h: 5 }, // black
    { color: "#2155CD", h: 7 }, // blue
    { color: "#FFA500", h: 9 }, // green
  ];

  p.setup = () => {
    p.createCanvas(width, 200);
    p.noLoop();

    p.strokeCap(p.SQUARE);

    p.noiseSeed(65536);
  };

  p.draw = () => {
    // reset the canvas
    p.background("#fff");

    p.strokeWeight(2);
    p.stroke("#444");

    for (const x of range(94, 96)) {
      p.line(x, 90, x, 110);
    }

    for (const x of range(902, 904)) {
      p.line(x, 90, x, 110);
    }

    const vals: number[] = [];
    for (const x of range(100, width - 100, 4)) {
      const v = random(values)!;

      p.stroke(v.color);
      p.line(x, 0 + 100, x, 100 + v.h);
      p.line(x, 0 + 100, x, 100 - v.h);

      vals.push(v.h);
    }

    // text
    p.noStroke();
    p.fill("#666");
    p.textSize(20);
    p.text("BARCODE", 30, 40);

    p.textSize(16);
    p.text(`by nanigashi. Created at ${dayjs().format()}`, 30, 60);

    p.fill("#aaa");
    p.text(vals.slice(0, 100).join(""), 40, 150);
    p.text(vals.slice(100, 200).join(""), 40, 170);
  };

  p.keyTyped = () => {
    if (p.keyCode === p.ENTER) {
      console.debug("streaming: redraw()");

      p.redraw();
    }
  };
};

export default barcode;
