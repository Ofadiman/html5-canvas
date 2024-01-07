import type { Meta, StoryObj } from "@storybook/react";
import { ElementRef, useLayoutEffect, useRef } from "react";
import { faker } from "@faker-js/faker";

faker.seed(2);

const CANVAS_SIZE = {
  WIDTH: 500,
  HEIGHT: 300,
};

const BasicLines = () => {
  const ref = useRef<ElementRef<"canvas">>(null);

  useLayoutEffect(() => {
    console.log(document.getElementsByName("body"));
    const context = ref.current?.getContext("2d");
    if (!context) {
      console.error(`no context, returning`);
      return;
    }

    context.lineWidth = 5;

    let prev = { x: 0, y: 0 };
    for (let i = 0; i < 5; i++) {
      // Reset context state
      context.beginPath();
      // Move to the starting point
      context.moveTo(prev.x, prev.y);

      const color = faker.color.hsl({ format: "css" });
      // Set line color
      context.strokeStyle = color;

      const x = faker.number.int({ min: 0, max: CANVAS_SIZE.WIDTH });
      const y = faker.number.int({ min: 0, max: CANVAS_SIZE.HEIGHT });

      // Move to the ending point
      context.lineTo(x, y);
      // Draw line
      context.stroke();

      prev.x = x;
      prev.y = y;
    }
  }, []);

  return (
    <canvas
      width={CANVAS_SIZE.WIDTH}
      height={CANVAS_SIZE.HEIGHT}
      style={{
        border: "1px solid black",
        margin: "auto",
        boxSizing: "border-box",
        width: CANVAS_SIZE.WIDTH,
        height: CANVAS_SIZE.HEIGHT,
      }}
      ref={ref}
    ></canvas>
  );
};

const meta: Meta<typeof BasicLines> = {
  component: BasicLines,
};

export default meta;
type Story = StoryObj<typeof BasicLines>;

export const Primary: Story = {
  render: () => <BasicLines />,
};
