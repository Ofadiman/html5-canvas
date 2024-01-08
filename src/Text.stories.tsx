import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const Basics = () => {
  return (
    <Canvas
      draw={(d) => {
        const fontSize = 30;
        d.context.fillStyle = "black";
        d.context.font = `italic bold ${fontSize}px Arial`;
        d.context.shadowColor = d.random.color();
        d.context.shadowOffsetX = 1;
        d.context.shadowOffsetY = 1;
        d.context.shadowBlur = 1;

        d.context.textAlign = "left";
        d.context.textBaseline = "top";

        d.context.fillText("lorem ipsum", 0, fontSize * 0);
        d.context.fill();

        d.context.strokeText("lorem ipsum", 0, fontSize * 1);
        d.context.stroke();
      }}
    />
  );
};

const meta: Meta<typeof Basics> = {
  title: "Texts/Basics",
  component: Basics,
};

export default meta;

export const Primary: StoryObj<typeof Basics> = {};
