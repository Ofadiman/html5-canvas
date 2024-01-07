import type { StoryObj, Meta } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const Shadows = () => {
  return (
    <Canvas
      draw={(d) => {
        d.context.beginPath();
        d.context.shadowColor = d.random.color();
        d.context.shadowBlur = 10;
        d.context.shadowOffsetX = 5;
        d.context.shadowOffsetY = 5;
        d.context.fillRect(10, 10, d.constants.size.WIDTH - 20, 100);

        d.context.beginPath();
        d.context.lineWidth = 10;
        d.context.moveTo(10, 200);
        d.context.lineTo(d.constants.size.WIDTH - 10, 200);
        d.context.shadowColor = d.random.color();
        d.context.shadowBlur = 10;
        d.context.shadowOffsetX = 5;
        d.context.shadowOffsetY = 5;
        d.context.stroke();
      }}
    />
  );
};

const meta: Meta<typeof Shadows> = {
  component: Shadows,
};

export default meta;

export const Primary: StoryObj<typeof Shadows> = {};
