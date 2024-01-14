import type { Meta } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const Rotate = () => {
  return (
    <Canvas
      draw={(d) => {
        for (let i = 0; i < 45; i += 5) {
          d.context.strokeStyle = d.random.color();
          d.context.beginPath();
          d.context.moveTo(d.center.x * 0.5, d.center.y * 0.5);
          d.context.lineTo(d.center.x * 1.5, d.center.y * 1.5);
          d.context.stroke();
          d.context.rotate(d.radian(i));
        }
      }}
    />
  );
};

const meta: Meta<typeof Rotate> = {
  title: "Transformations/Rotate",
  component: Rotate,
};

export default meta;

export const Primary = {};
