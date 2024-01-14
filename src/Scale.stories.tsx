import type { Meta } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const Scale = () => {
  return (
    <Canvas
      draw={(d) => {
        d.context.scale(0.5, 0.5);
        d.context.fillStyle = d.random.color();
        d.context.fillRect(50, 50, 50, 50);

        d.context.scale(2, 2);
        d.context.fillStyle = d.random.color();
        d.context.fillRect(50, 50, 50, 50);

        d.context.scale(2, 2);
        d.context.fillStyle = d.random.color();
        d.context.fillRect(50, 50, 50, 50);

        d.context.scale(2, 2);
        d.context.fillStyle = d.random.color();
        d.context.fillRect(50, 50, 50, 50);
      }}
    />
  );
};

const meta: Meta<typeof Scale> = {
  title: "Transformations/Scale",
  component: Scale,
};

export default meta;

export const Primary = {};
