import type { Meta } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

type Ball = {
  x: number;
  y: number;
  color: string;
  radius: number;
};
const balls: Ball[] = [];

const current = {
  x: 0,
  y: 0,
};

const prev = {
  x: 0,
  y: 0,
};

let index = -1;

const Dragging = () => {
  return (
    <Canvas
      nativeCanvasProps={{
        onMouseDown: (event) => {
          const canvas = event.currentTarget;
          const rect = canvas.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          balls.forEach((ball, i) => {
            const distance = Math.sqrt(
              (ball.x - x) * (ball.x - x) + (ball.y - y) * (ball.y - y)
            );
            if (distance < ball.radius) {
              index = i;
            }
          });
        },
        onMouseUp: () => {
          index = -1;
        },
        onMouseMove: (event) => {
          const canvas = event.currentTarget;
          const rect = canvas.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;

          prev.x = current.x;
          prev.y = current.y;
          current.x = x;
          current.y = y;
          if (index === -1) {
            return;
          }
          const diffX = current.x - prev.x;
          const diffY = current.y - prev.y;
          balls[index].x += diffX;
          balls[index].y += diffY;
        },
      }}
      animate={true}
      once={(d) => {
        for (let i = 0; i < 10; i++) {
          balls.push({
            x: d.random.int(0, d.canvas.width),
            y: d.random.int(0, d.canvas.height),
            radius: d.random.int(10, 50),
            color: d.random.color(),
          });
        }
      }}
      draw={(d) => {
        d.clearCanvas();
        balls.forEach((ball) => {
          d.context.fillStyle = ball.color;
          d.context.beginPath();
          d.context.arc(
            ball.x,
            ball.y,
            ball.radius,
            d.radian(0),
            d.radian(360)
          );
          d.context.closePath();
          d.context.fill();
        });
      }}
    />
  );
};

const meta: Meta<typeof Dragging> = {
  title: "Utils/Dragging",
  component: Dragging,
};

export default meta;

export const Primary = {};
