import p5 from "p5";

// Coordinate

export type Coordinate = {
  x: number;
  y: number;
  z?: number;
};

export function getCoordinate(
  rad: number,
  R?: number,
  align?: number
): Coordinate {
  return {
    x: (R || 1) * Math.cos(rad) + (align || 0),
    y: (R || 1) * Math.sin(rad) + (align || 0),
  };
}

export function coordinateOf(x: number, y: number, z?: number): Coordinate {
  return { x, y, z };
}

// Line

export type Line = {
  start: Coordinate;
  end: Coordinate;
  alpha?: number;
  color?: string;
};

export type Line3D = Line & {
  start: Required<Coordinate>;
  end: Required<Coordinate>;
};

export function writeLine(p: p5, line: Line, alignment?: number) {
  const align = alignment || 0;

  p.line(
    line.start.x + align,
    line.start.y + align,
    line.end.x + align,
    line.end.y + align
  );
}

// key
export function switchLoop(p: p5, key: string, id?: string) {
  if (p.key === key.toLowerCase()) {
    if (p.isLooping()) {
      console.debug(`${id || "unknown"}: STOP loop`);
      p.noLoop();
    } else {
      console.debug(`${id || "unknown"}: BEGIN loop`);
      p.loop();
    }
  }
}

export function keyRedraw(p: p5, key: string, id?: string) {
  if (p.key === key.toLowerCase()) {
    console.debug(`${id || "unknown"}: redraw`);
    p.redraw();
  }
}
