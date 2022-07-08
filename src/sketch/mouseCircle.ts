import p5 from "p5";
import { choiceColorFrom, RGBColor } from "~/util/color";

const width = 500;

/**
 * Represents the particle.
 */
type Particle = {
  x: number;
  y: number;
  color: RGBColor;
  alpha: number;
};

const mouseCircle = (p: p5) => {
  const particles: Particle[] = [];

  p.setup = () => {
    p.createCanvas(width, width);
    p.frameRate(24);

    p.noStroke();
  };

  p.draw = () => {
    if (p.mouseIsPressed) {
      const color = choiceColorFrom("Green");
      const x = p.mouseX;
      const y = p.mouseY;

      particles.push({
        x,
        y,
        color,
        alpha: 100,
      });
    }

    // reset the canvas
    p.background("#fff");

    // if no particles to be rendered, skip the process
    if (particles.length === 0) {
      return;
    }

    particles.map((particle, index) => {
      // reduces opacity
      particle.alpha -= 3;

      // if particle is invisible, remove it
      if (particle.alpha <= 0) {
        particles.splice(index, 1);
        return;
      }

      // RENDERING PROCESS GO BRR
      const { x, y, color, alpha } = particle;

      p.fill(color.red, color.green, color.blue, alpha);
      p.ellipse(x, y, 50);
    });
  };
};

export default mouseCircle;
