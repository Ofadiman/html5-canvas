import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const state = {
  position: {
    x: 0,
    y: 0,
  },
  vector: {
    x: 1.3,
    y: 0.9,
  },
  speed: {
    x: 1,
    y: 1,
  },
};

const SIZE = 100;
const ACCELERATION = {
  X: 0.1,
  Y: 0.05,
};
const MAX_SPEED = {
  X: 3,
  Y: 2,
};

const Acceleration = () => {
  return (
    <Canvas
      animate={true}
      draw={(d) => {
        d.context.clearRect(0, 0, d.canvas.width, d.canvas.height);

        d.context.fillRect(state.position.x, state.position.y, SIZE, SIZE);

        if (state.vector.x >= 0) {
          if (state.position.x + SIZE >= d.canvas.width) {
            state.vector.x *= -1;
          }
        }

        if (state.vector.x <= 0) {
          if (state.position.x <= 0) {
            state.vector.x *= -1;
          }
        }

        if (state.vector.y >= 0) {
          if (state.position.y + SIZE >= d.canvas.height) {
            state.vector.y *= -1;
          }
        }

        if (state.vector.y <= 0) {
          if (state.position.y <= 0) {
            state.vector.y *= -1;
          }
        }

        if (state.speed.x < MAX_SPEED.X) {
          state.speed.x = state.speed.x + ACCELERATION.X;
        }

        if (state.speed.y < MAX_SPEED.Y) {
          state.speed.y = state.speed.y + ACCELERATION.Y;
        }

        state.position.x = state.position.x + state.vector.x * state.speed.x;
        state.position.y = state.position.y + state.vector.y * state.speed.y;
      }}
    />
  );
};

const meta: Meta<typeof Acceleration> = {
  title: "Physics/Acceleration",
  component: Acceleration,
};

export default meta;

export const Primary: StoryObj<typeof Acceleration> = {};
