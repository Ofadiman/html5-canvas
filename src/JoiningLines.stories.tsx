import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const JoiningLines = (props: {
  lineJoin: CanvasRenderingContext2D["lineJoin"];
}) => {
  return (
    <Canvas
      draw={(d) => {
        d.context.lineWidth = 20;

        console.log(props.lineJoin);
        d.context.beginPath();
        d.context.lineJoin = props.lineJoin;
        d.context.strokeStyle = d.random.color();
        d.context.moveTo(10, 10);
        d.context.lineTo(d.constants.size.WIDTH / 2, 10);
        d.context.lineTo(
          d.constants.size.WIDTH / 2,
          d.constants.size.HEIGHT - 10
        );
        d.context.lineTo(
          d.constants.size.WIDTH - 10,
          d.constants.size.HEIGHT - 10
        );
        d.context.stroke();
      }}
    />
  );
};

const meta: Meta<typeof JoiningLines> = {
  component: JoiningLines,
  argTypes: {
    lineJoin: {
      options: ["miter", "round", "bevel"],
      control: { type: "select" },
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof JoiningLines> = {
  args: {
    lineJoin: "miter",
    variant: "foo",
  },
};
