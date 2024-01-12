import type { Meta } from "@storybook/react";
import { Canvas } from "./utils/Canvas";
import imageSrc from "../assets/pipege.webp";

const RepeatPatterns = () => {
  return (
    <Canvas
      draw={(d) => {
        const image = new Image();
        image.src = imageSrc;
        image.onload = () => {
          const pattern = d.context.createPattern(image, "repeat");
          d.context.fillStyle = pattern!;
          d.context.fillRect(0, 0, d.canvas.width, d.canvas.height);
        };
      }}
    />
  );
};

const meta: Meta<typeof RepeatPatterns> = {
  title: "Utils/Repeat patterns",
  component: RepeatPatterns,
};

export default meta;

export const Primary = {};
