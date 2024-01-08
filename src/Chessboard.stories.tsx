import type { Meta } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const SQUARE_SIZE = 25;
const SQUARE_COUNT = 8;
const OFFSET = 50;
const BORDER_WIDTH = 2;

const Chessboard = () => {
  return (
    <Canvas
      draw={(d) => {
        d.context.fillStyle = "brown";
        d.context.fillRect(
          OFFSET - BORDER_WIDTH,
          OFFSET - BORDER_WIDTH,
          SQUARE_SIZE * SQUARE_COUNT + 2 * BORDER_WIDTH,
          SQUARE_SIZE * SQUARE_COUNT + 2 * BORDER_WIDTH
        );
        for (let y = 0; y < SQUARE_COUNT; y++) {
          for (let x = 0; x < SQUARE_COUNT; x++) {
            if ((x + y) % 2 === 0) {
              d.context.fillStyle = "white";
            } else {
              d.context.fillStyle = "black";
            }
            d.context.fillRect(
              x * SQUARE_SIZE + OFFSET,
              y * SQUARE_SIZE + OFFSET,
              SQUARE_SIZE,
              SQUARE_SIZE
            );
          }
        }
      }}
    />
  );
};

const meta: Meta<typeof Chessboard> = {
  title: "Shapes/Chessboard",
  component: Chessboard,
};

export default meta;

export const Primary = {};
