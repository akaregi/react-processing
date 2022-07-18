import p5 from "p5";

// Coordinate

export type Coordinate = {
  x: number;
  y: number;
  z?: number;
};

export function getCoordinate(rad: number, R?: number): Coordinate {
  return {
    x: (R || 1) * Math.cos(rad),
    y: (R || 1) * Math.sin(rad),
  };
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
