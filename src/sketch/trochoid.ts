import p5 from "p5";

const width = 300;
const rC = 40;
const rM = 50;
const rD = 30;

type Coordinate = {
  x: number;
  y: number;
};

type History = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
};

/**
 * Calculates the trochoid from the theta(radian)
 *
 * @param theta degree as radian
 * @returns x and y as Coordinate
 */
function getTrochoidCoordinate(theta: number): Coordinate {
  return {
    x: (rC - rM) * Math.cos(theta) + rD * Math.cos(((rC - rM) / rM) * theta),
    y: (rC - rM) * Math.sin(theta) + rD * Math.sin(((rC - rM) / rM) * theta),
  };
}

const trochoid = (p: p5) => {
  const history: History[] = [];

  let theta = p.radians(0);

  let state: {
    start: Coordinate;
    end: Coordinate;
  } = {
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0 },
  };

  p.setup = () => {
    p.createCanvas(width, width);
    p.frameRate(30);

    // initialize
    state.end = getTrochoidCoordinate(theta);
  };

  p.draw = () => {
    if (theta >= 2 * Math.PI * 10) {
      p.noLoop();
      return;
    }

    theta += p.radians(10);

    state.start = state.end;
    state.end = getTrochoidCoordinate(theta);

    history.push({
      startX: state.start.x,
      startY: state.start.y,
      endX: state.end.x,
      endY: state.end.y,
    });

    history.map((h) =>
      p.line(
        h.startX + width / 2,
        h.startY + width / 2,
        h.endX + width / 2,
        h.endY + width / 2
      )
    );
  };
};

export default trochoid;
