import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const Circles = () => {
  return (
    <Canvas
      draw={(d) => {
        d.context.lineWidth = 5;

        d.context.beginPath();
        d.context.strokeStyle = d.random.color();
        d.context.arc(d.center.x, d.center.y, 50, 0, Math.PI * 2);
        d.context.stroke();

        d.context.beginPath();
        d.context.strokeStyle = d.random.color();
        d.context.arc(d.center.x, d.center.y, 100, Math.PI, Math.PI * 1.7);
        d.context.stroke();
      }}
    />
  );
};

const meta: Meta<typeof Circles> = {
  title: "Paths/Circles",
  component: Circles,
};

export default meta;

export const Primary: StoryObj<typeof Circles> = {};
