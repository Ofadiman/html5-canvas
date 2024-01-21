import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const ball = {
  color: "black",
  radius: 50,
  position: {
    x: 250,
    y: 150,
  },
  speed: 0.1,
  vector: {
    x: 1,
    y: 1,
  },
};

const GRAVITY = 0.2;

const Juggling = () => {
  return (
    <Canvas
      nativeCanvasProps={{
        onClick: (event) => {
          const canvas = event.target as HTMLCanvasElement;
          const rect = canvas.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          const distance = Math.sqrt(
            (ball.position.x - x) * (ball.position.x - x) +
              (ball.position.y - y) * (ball.position.y - y)
          );

          if (distance <= ball.radius) {
            ball.speed = -5;
          }
        },
      }}
      animate={true}
      draw={(d) => {
        d.clearCanvas();

        d.context.beginPath();
        d.context.arc(
          ball.position.x,
          ball.position.y,
          ball.radius,
          d.radian(0),
          d.radian(360)
        );
        d.context.closePath();
        d.context.fill();

        if (
          ball.position.y + ball.radius >= d.canvas.height &&
          ball.speed > 0
        ) {
          ball.position.y = d.canvas.height - ball.radius;
          ball.speed = 0;
          return;
        }

        ball.speed = ball.speed + GRAVITY;
        ball.position.y = ball.position.y + ball.speed;
      }}
    />
  );
};

const meta: Meta<typeof Juggling> = {
  title: "Physics/Juggling",
  component: Juggling,
};

export default meta;

export const Primary: StoryObj<typeof Juggling> = {};
