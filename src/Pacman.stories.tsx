import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const Pacman = () => {
  return (
    <Canvas
      draw={(d) => {
        d.context.strokeStyle = d.random.color();
        d.context.lineWidth = 10;
        d.context.fillStyle = d.random.color();

        d.context.beginPath();
        d.context.moveTo(d.center.x, d.center.y);
        d.context.lineTo(d.center.x + 50, d.center.y + 50);
        d.context.arc(
          d.center.x,
          d.center.y,
          Math.sqrt(2) * 50,
          d.radian(45),
          d.radian(-45)
        );
        d.context.lineTo(d.center.x, d.center.y);
        d.context.stroke();
        d.context.fill();

        d.context.beginPath();
        d.context.fillStyle = "black";
        d.context.arc(
          d.center.x,
          d.center.y - 35,
          5,
          d.radian(0),
          d.radian(360)
        );
        d.context.fill();
      }}
    />
  );
};

const meta: Meta<typeof Pacman> = {
  title: "Shapes/Pacman",
  component: Pacman,
};

export default meta;

export const Primary: StoryObj<typeof Pacman> = {};
