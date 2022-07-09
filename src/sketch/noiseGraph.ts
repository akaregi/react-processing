import p5 from "p5";

const width = 500;

/**
 * Represents the particle.
 */
type Point = {
  x: number;
  y: number;
};

const noiseGraph = (p: p5) => {
  const points: Point[] = [];
  let step = 0;

  p.setup = () => {
    // canvas
    p.createCanvas(width, width);
    p.frameRate(60);

    // point style
    p.fill("#3f54ba");

    // initialize the noise
    p.noise(Math.random() * 100);
  };

  p.draw = () => {
    // reset the canvas
    p.background("#fff");

    p.stroke("#3f54ba55");
    p.line(0, 0, 500, 0);
    p.line(0, 100, 500, 100);
    p.line(0, 200, 500, 200);
    p.line(0, 300, 500, 300);
    p.line(0, 400, 500, 400);

    p.line(0, 0, 0, 500);
    p.line(100, 0, 100, 500);
    p.line(200, 0, 200, 500);
    p.line(300, 0, 300, 500);
    p.line(400, 0, 400, 500);

    // creates new random point
    p.stroke("#3f54ba");
    p.strokeWeight(2);

    step += 0.01;
    const x = 500;
    const y = p.noise(step) * width;

    points.push({
      x,
      y,
    });

    points.map((point, index) => {
      point.x -= 1;

      // if particle is invisible, remove it
      if (point.x <= 0) {
        points.splice(index, 1);
        return;
      }

      // RENDERING PROCESS GO BRR
      const { x, y } = point;

      if (points.length === 1 || index === points.length - 1) {
        return;
      }

      // next point
      const { x: nX, y: nY } = points[index + 1];
      p.line(x, y, nX, nY);
    });
  };
};

export default noiseGraph;
