import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const Gradients = () => {
  return (
    <Canvas
      draw={(d) => {
        const g1 = d.context.createLinearGradient(
          0,
          0,
          d.canvas.width / 2,
          d.canvas.height
        );
        g1.addColorStop(0, "red");
        g1.addColorStop(1, "blue");
        d.context.fillStyle = g1;
        d.context.fillRect(0, 0, d.canvas.width / 2, d.canvas.height);

        const g2 = d.context.createRadialGradient(
          (d.canvas.width * 3) / 4,
          d.canvas.height / 2,
          25,
          (d.canvas.width * 3) / 4,
          d.canvas.height / 2,
          d.canvas.height / 2
        );
        g2.addColorStop(0, "red");
        g2.addColorStop(1, "blue");
        d.context.fillStyle = g2;
        d.context.fillRect(
          d.canvas.width / 2,
          0,
          d.canvas.width,
          d.canvas.height
        );
      }}
    />
  );
};

const meta: Meta<typeof Gradients> = {
  title: "Utils/Gradients",
  component: Gradients,
};

export default meta;

export const Primary: StoryObj<typeof Gradients> = {};
