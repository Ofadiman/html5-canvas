import { StoryObj, Meta } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const QuadraticCurves = () => {
  return (
    <Canvas
      draw={(d) => {
        d.context.strokeStyle = d.random.color();
        d.context.lineWidth = 10;
        d.context.beginPath();

        d.context.moveTo(d.center.x - 100, d.center.y);
        d.context.quadraticCurveTo(
          d.center.x,
          d.center.y - 200,
          d.center.x + 100,
          d.center.y
        );
        d.context.stroke();

        d.context.moveTo(d.center.x, d.center.y);
        d.context.beginPath();
        d.context.arc(d.center.x, d.center.y, 5, 0, Math.PI * 2);
        d.context.fillStyle = d.random.color();
        d.context.fill();
      }}
    ></Canvas>
  );
};

const meta: Meta<typeof QuadraticCurves> = {
  component: QuadraticCurves,
};

export default meta;

export const Primary: StoryObj<typeof QuadraticCurves> = {};
