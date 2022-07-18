import p5 from "p5";
import range from "just-range";
import random from "just-random";

const DIMENSION = 1000;
const PIXELS = 50;

// 自動算出
const PIXEL_RANGE = range(0, PIXELS);
const PIXEL_SIZE = DIMENSION / PIXELS;

type CellValue = 0 | 1;
type CellState = "DEAD" | "ALIVE" | "BE_BORN" | "TOO_MANY" | "TOO_FEW";
type Cell = { cell: CellValue; state: CellState };

const lifeGame = (p: p5) => {
  let board: Cell[][] = [];

  p.setup = () => {
    p.createCanvas(DIMENSION, DIMENSION);
    p.frameRate(8);
    p.noLoop();

    p.noStroke();

    board = newBoard();
  };

  p.draw = () => {
    // 縦横比とレンダリングするピクセル数の比率が整数ではないと
    // 見た目が吸い散らかして楽しくないのでここで判別する
    if (PIXEL_SIZE % 1 !== 0) {
      console.error("The ratio of Dimension / Pixels is not an integer. Exit.");

      p.noLoop();
      return;
    }

    p.background("#FFF");

    // render

    for (const x of PIXEL_RANGE) {
      for (const y of PIXEL_RANGE) {
        const state = board[x][y].state;

        switch (state) {
          case "ALIVE":
            p.fill("#06283D"); // black
            break;

          case "BE_BORN":
            p.fill("#3330E4"); // blue
            break;

          case "TOO_FEW":
          case "TOO_MANY":
            p.fill("#3330E422"); // with alpha
            break;

          case "DEAD":
            p.fill("#FFF");
            break;
        }

        p.ellipse(
          x * PIXEL_SIZE + PIXEL_SIZE / 2,
          y * PIXEL_SIZE + PIXEL_SIZE / 2,
          PIXEL_SIZE * 1,
          PIXEL_SIZE * 1
        );
      }
    }
    board = nextStep();
  };

  p.mousePressed = () => {
    if (p.isLooping()) {
      console.debug("lifeGame: STOP rendering");
      p.noLoop();
    } else {
      console.debug("lifeGame: BEGIN rendering");
      p.loop();
    }
  };

  /**
   * Initializes the board of the Life of Game.
   */
  function newBoard() {
    const B: { cell: CellValue; state: CellState }[][] = [];
    for (const x of PIXEL_RANGE) {
      B.push([]);

      for (const y of PIXEL_RANGE) {
        const cell: CellValue = random([0, 1]);
        const state: CellState = cell ? "ALIVE" : "DEAD";
        B[x][y] = { cell, state };
      }
    }

    return B;
  }

  function nextStep() {
    const nextBoard = newBoard();

    for (const y of PIXEL_RANGE) {
      for (const x of PIXEL_RANGE) {
        // D(x - 1, y - 1)
        let D1 = 0;
        if (x - 1 > -1 && y - 1 > -1) {
          D1 = board[x - 1][y - 1].cell;
        }

        // D(x + 0, y - 1)
        let D2 = 0;
        if (y - 1 > -1) {
          D2 = board[x][y - 1].cell;
        }

        // D(x + 1, y - 1)
        let D3 = 0;
        if (x + 1 < PIXELS && y - 1 > -1) {
          D3 = board[x + 1][y - 1].cell;
        }

        // D(x - 1, y + 0)
        let D4 = 0;
        if (x - 1 > -1) {
          D4 = board[x - 1][y].cell;
        }

        // D(x + 0, y + 0)
        const P = board[x][y].cell;

        // D(x + 1, y + 0)
        let D6 = 0;
        if (x + 1 < PIXELS) {
          D6 = board[x + 1][y].cell;
        }

        // (x - 1, y + 1)
        let D7 = 0;
        if (x - 1 > -1 && y + 1 < PIXELS) {
          D7 = board[x - 1][y + 1].cell;
        }

        // D(x + 0, y + 1)
        let D8 = 0;
        if (y + 1 < PIXELS) {
          D8 = board[x][y + 1].cell;
        }

        // D(x + 1, y + 1)
        let D9 = 0;
        if (x + 1 < PIXELS && y + 1 < PIXELS) {
          D9 = board[x + 1][y + 1].cell;
        }

        const alive = D1 + D2 + D3 + D4 + D6 + D7 + D8 + D9;

        // console.log(
        //   `${P}(${x}, ${y}) (${D1}, ${D2}, ${D3}, ${D4}, ${D6}, ${D7}, ${D8}, ${D9})(${alive})`
        // );

        if (P) {
          // if alive
          if (alive === 2 || alive === 3) {
            // 生きている条件を満たすので終了
            nextBoard[x][y].cell = P;
            nextBoard[x][y].state = "ALIVE";
            continue;
          }

          // おめでとう市民！晴れて市民は死亡た！死亡届を提出してください
          nextBoard[x][y].cell = 0;

          if (alive >= 4) {
            // alive >= 4 (過密)
            nextBoard[x][y].state = "TOO_MANY";
          } else {
            // alive <= 1 (過疎)
            nextBoard[x][y].state = "TOO_FEW";
          }
        } else {
          // if dead
          if (alive === 3) {
            // おめでとう市民！晴れて市民が誕生た！出生届を提出してください
            nextBoard[x][y].cell = 1;
            nextBoard[x][y].state = "BE_BORN";
          } else {
            // STATUS QUO
            nextBoard[x][y].cell = P;
            nextBoard[x][y].state = "DEAD";
          }
        }
      }
    }

    return nextBoard;
  }
};

export default lifeGame;
