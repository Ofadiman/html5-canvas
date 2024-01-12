import type { Meta } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const SaveAndRestoreState = () => {
  return (
    <Canvas
      draw={(d) => {
        d.context.strokeStyle = d.random.color();
        d.context.lineWidth = d.random.int(0, 10);

        d.context.beginPath();
        const s1 = d.random.point();
        d.context.moveTo(s1.x, s1.y);
        const e1 = d.random.point();
        d.context.lineTo(e1.x, e1.y);
        d.context.stroke();

        d.context.save();

        d.context.strokeStyle = "black";
        d.context.lineWidth = 30;

        d.context.beginPath();
        const s2 = d.random.point();
        d.context.moveTo(s2.x, s2.y);
        const e2 = d.random.point();
        d.context.lineTo(e2.x, e2.y);
        d.context.stroke();

        d.context.restore();

        d.context.beginPath();
        const s3 = d.random.point();
        d.context.moveTo(s3.x, s3.y);
        const e3 = d.random.point();
        d.context.lineTo(e3.x, e3.y);
        d.context.stroke();
      }}
    />
  );
};

const meta: Meta<typeof SaveAndRestoreState> = {
  title: "State/SaveAndRestoreState",
  component: SaveAndRestoreState,
};

export default meta;

export const Primary = {};
