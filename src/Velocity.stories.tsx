import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const state = {
  position: {
    x: 0,
    y: 0,
  },
  vector: {
    x: 1,
    y: 1,
  },
};

const SIZE = 100;

const Velocity = () => {
  return (
    <Canvas
      animate={true}
      draw={(d) => {
        d.context.clearRect(0, 0, d.canvas.width, d.canvas.height);

        d.context.fillRect(state.position.x, state.position.y, SIZE, SIZE);
        if (state.vector.x === 1) {
          if (state.position.x + SIZE === d.canvas.width) {
            state.vector.x = -1;
          }
        }

        if (state.vector.x === -1) {
          if (state.position.x === 0) {
            state.vector.x = 1;
          }
        }

        if (state.vector.y === 1) {
          if (state.position.y + SIZE === d.canvas.height) {
            state.vector.y = -1;
          }
        }

        if (state.vector.y === -1) {
          if (state.position.y === 0) {
            state.vector.y = 1;
          }
        }

        state.position.x += state.vector.x;
        state.position.y += state.vector.y;
      }}
    />
  );
};

const meta: Meta<typeof Velocity> = {
  title: "Physics/Velocity",
  component: Velocity,
};

export default meta;

export const Primary: StoryObj<typeof Velocity> = {};
