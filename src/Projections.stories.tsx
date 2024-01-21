import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const BALL_SIZE = 20;

const state = {
  position: {
    x: BALL_SIZE,
    y: 300 - BALL_SIZE,
  },
  vector: {
    x: 0.5,
    y: 0.9,
  },
  speed: {
    x: 10,
    y: 10,
  },
};

const GRAVITY = 0.4;

let shouldDraw = false;

const Projections = () => {
  setTimeout(() => {
    shouldDraw = true;
  }, 1000);

  return (
    <Canvas
      animate={true}
      draw={(d) => {
        d.context.clearRect(0, 0, d.canvas.width, d.canvas.height);

        d.context.beginPath();
        d.context.arc(
          state.position.x,
          state.position.y,
          BALL_SIZE,
          d.radian(0),
          d.radian(360)
        );
        d.context.closePath();
        d.context.fill();

        if (shouldDraw === false) {
          return;
        }

        if (state.position.y <= 300 - BALL_SIZE) {
          state.speed.y = state.speed.y - GRAVITY;
          state.position.x = state.position.x + state.speed.x * state.vector.x;
          state.position.y = state.position.y - state.speed.y * state.vector.y;
        }
      }}
    />
  );
};

const meta: Meta<typeof Projections> = {
  title: "Physics/Projections",
  component: Projections,
};

export default meta;

export const Primary: StoryObj<typeof Projections> = {};
