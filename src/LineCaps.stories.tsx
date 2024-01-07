import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const LineCaps = () => {
  return (
    <Canvas
      draw={({ faker, context }) => {
        context.lineWidth = 10;

        context.strokeStyle = faker.color.hsl({ format: "css" });
        context.lineCap = "butt";
        context.beginPath();
        context.moveTo(50, 50);
        context.lineTo(250, 50);
        context.stroke();

        context.strokeStyle = faker.color.hsl({ format: "css" });
        context.lineCap = "round";
        context.beginPath();
        context.moveTo(50, 100);
        context.lineTo(250, 100);
        context.stroke();

        context.strokeStyle = faker.color.hsl({ format: "css" });
        context.lineCap = "square";
        context.beginPath();
        context.moveTo(50, 150);
        context.lineTo(250, 150);
        context.stroke();
      }}
    />
  );
};

const meta: Meta<typeof LineCaps> = {
  component: LineCaps,
};

export default meta;
type Story = StoryObj<typeof LineCaps>;

export const Primary: Story = {
  render: () => <LineCaps />,
};
