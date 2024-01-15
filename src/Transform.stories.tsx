import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const Transform = () => {
  return (
    <Canvas
      draw={(d) => {
        d.context.setTransform(1, 0.2, 0.2, 1, 0, 0);
        d.context.fillRect(0, 0, 100, 100);

        d.context.arc(d.center.x, d.center.y, 50, 0, d.radian(360));
        d.context.fill();
      }}
    />
  );
};

const meta: Meta<typeof Transform> = {
  title: "Transformations/Transform",
  component: Transform,
};

export default meta;

export const Primary: StoryObj<typeof Transform> = {};
