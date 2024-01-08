import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const Polygons = () => {
  return (
    <Canvas
      draw={(d) => {
        const radius = 100;
        const sides = 7;
        const angle = d.radian(360) / sides;
        const startAngle = d.radian(0);

        d.context.beginPath();
        d.context.strokeStyle = d.random.color();
        d.context.lineWidth = 5;
        d.context.lineJoin = "round";
        d.context.shadowOffsetX = 5;
        d.context.shadowOffsetX = 5;
        d.context.shadowColor = d.random.color();
        d.context.shadowBlur = 5;

        const beginX = d.center.x + radius * Math.cos(startAngle);
        const beginY = d.center.y - radius * Math.sin(startAngle);
        d.context.moveTo(beginX, beginY);

        for (let i = 1; i <= sides; i++) {
          const nextX = d.center.x + radius * Math.cos(startAngle + i * angle);
          const nextY = d.center.y - radius * Math.sin(startAngle + i * angle);
          d.context.lineTo(nextX, nextY);
        }

        d.context.stroke();
      }}
    />
  );
};

const meta: Meta<typeof Polygons> = {
  title: "Shapes/Polygons",
  component: Polygons,
};

export default meta;

export const Primary: StoryObj<typeof Polygons> = {};
