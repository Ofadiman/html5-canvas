import type { Meta } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const Rectangles = () => {
  return (
    <Canvas
      draw={(d) => {
        d.context.fillStyle = d.random.color();
        d.context.strokeStyle = d.random.color();
        d.context.lineJoin = "round";
        d.context.lineWidth = 10;

        d.context.beginPath();
        d.context.rect(0, 0, 100, 50);
        d.context.stroke();
        d.context.fill();

        d.context.fillRect(125, 0, 100, 50);

        d.context.roundRect(250, 0, 100, 50, 50);
        d.context.fill();
        d.context.stroke();

        d.context.strokeRect(100, 100, 100, 50);
        d.context.stroke();

        d.context.clearRect(0, 0, 150, 125);
      }}
    />
  );
};

const meta: Meta<typeof Rectangles> = {
  title: "Shapes/Rectangles",
  component: Rectangles,
};

export default meta;

export const Primary = {};
