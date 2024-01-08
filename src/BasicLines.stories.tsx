import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const BasicLines = () => {
  return (
    <Canvas
      draw={({ context, random }) => {
        context.lineWidth = 5;

        let prev = { x: 0, y: 0 };
        for (let i = 0; i < 5; i++) {
          // Reset context state
          context.beginPath();
          // Move to the starting point
          context.moveTo(prev.x, prev.y);

          const color = random.color();
          // Set line color
          context.strokeStyle = color;

          const point = random.point();
          // Move to the ending point
          context.lineTo(point.x, point.y);
          // Draw line
          context.stroke();

          prev = point;
        }
      }}
    />
  );
};

const meta: Meta<typeof BasicLines> = {
  title: "Paths/Basic lines",
  component: BasicLines,
};

export default meta;
type Story = StoryObj<typeof BasicLines>;

export const Primary: Story = {};
