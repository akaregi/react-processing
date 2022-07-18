import p5 from "p5";
import random from "just-random";
import range from "just-range";
import { Line3D, switchLoop } from "~/util/p5util";

const DIMENSION = 1000;
const ALIGN = 400;

const R = 400;

const meshSphere3D = (p: p5) => {
  const degrees = range(0, 360);
  let lines: Required<Line3D>[] = [];

  // translation
  let rotation = 0.1;

  p.setup = () => {
    p.createCanvas(DIMENSION, DIMENSION, p.WEBGL);
    p.noLoop();
  };

  p.draw = () => {
    render();
  };

  p.keyTyped = () => {
    switchLoop(p, "Z", "meshSphere3D");
  };

  function render() {
    p.background("#FFF");

    p.rotateY(rotation);
    p.rotateZ(rotation / 2);

    p.strokeWeight(2);

    lines = lines.filter((line) => {
      p.stroke(`${line.color}${line.alpha.toString(16)}`);

      const start = line.start;
      const end = line.end;

      p.beginShape();
      p.vertex(start.x, start.y, start.z);
      p.vertex(end.x, end.y, end.z);
      p.endShape();

      line.alpha--;
      return line.alpha > 0;
    });

    const rad = {
      theta: p.radians(random(degrees)!),
      phi: p.radians(random(degrees)!),
    };

    const invRad = {
      theta: rad.theta * Math.PI,
      phi: rad.phi * Math.PI,
    };

    lines.push({
      start: {
        x: R * Math.sin(rad.theta) * Math.cos(rad.phi),
        y: R * Math.sin(rad.theta) * Math.sin(rad.phi),
        z: R * Math.cos(rad.theta),
      },

      end: {
        x: R * Math.sin(invRad.theta) * Math.cos(invRad.phi),
        y: R * Math.sin(invRad.theta) * Math.sin(invRad.phi),
        z: R * Math.cos(invRad.theta),
      },

      color: random(["#A5C9CA", "#CEE5D0"]),
      alpha: 255,
    });

    p.fill("#A5C9CA11");
    p.stroke("#A5C9CA33");
    p.strokeWeight(1);
    p.sphere(ALIGN + 5);

    rotation += 0.01;
  }
};

export default meshSphere3D;
