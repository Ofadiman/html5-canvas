import { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const BezierCurves = () => {
  return (
    <Canvas
      draw={(d) => {
        d.context.strokeStyle = d.random.color();
        d.context.lineWidth = 5;

        d.context.beginPath();
        d.context.moveTo(d.center.x - 50, d.center.y);
        d.context.bezierCurveTo(
          d.center.x - 25,
          d.center.y + 50,
          d.center.x + 25,
          d.center.y - 50,
          d.center.x + 50,
          d.center.y
        );
        d.context.stroke();
      }}
    />
  );
};

const meta: Meta<typeof BezierCurves> = {
  component: BezierCurves,
};

export default meta;

export const Primary: StoryObj<typeof BezierCurves> = {};
