import type { Meta } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const Translate = () => {
  return (
    <Canvas
      draw={(d) => {
        for (let i = 0; i < 10; i++) {
          d.context.translate(10, 10);
          d.context.fillStyle = d.random.color();
          d.context.fillRect(0, 0, 100, 100);
        }
      }}
    />
  );
};

const meta: Meta<typeof Translate> = {
  title: "Transformations/Translate",
  component: Translate,
};

export default meta;

export const Primary = {};
