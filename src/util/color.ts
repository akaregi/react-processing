import random from "just-random";

/**
 * Represents a color combination of RGB.
 */
export type RGBColor = {
  red: number;
  green: number;
  blue: number;
};

/**
 * Picks a random RGB color.
 *
 * ```js
 * const color = randomColor();
 * color // -> { red: 100, green: 200, blue: 255 }
 * ```
 *
 * @returns A RGB Object
 */
export function randomColor(): RGBColor {
  const num = Math.round(0xffffff * Math.random());

  return {
    red: num >> 16,
    green: (num >> 8) & 255,
    blue: num & 255,
  };
}

type ColorPalette = "Green";

export function choiceColorFrom(palette: ColorPalette): RGBColor {
  switch (palette) {
    case "Green":
      return choiceGreenPalette();

    default:
      return {
        red: 0,
        green: 0,
        blue: 0,
      };
  }
}

function choiceGreenPalette(): RGBColor {
  const a = {
    red: 196,
    green: 223,
    blue: 170,
  };

  const b = {
    red: 144,
    green: 200,
    blue: 172,
  };

  const c = {
    red: 115,
    green: 169,
    blue: 173,
  };

  return random([a, b, c]);
}
