import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";
import { useEffect, useRef } from "react";

const AnimatingShapes = () => {
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <Canvas
      draw={(d) => {
        const RADIUS = 50;
        const SPEED = 1;

        d.context.fillStyle = d.random.color();
        d.context.strokeStyle = d.random.color();

        const vector = {
          x: d.random.int(1, 5),
          y: d.random.int(1, 5),
        };
        const position = {
          x: RADIUS,
          y: RADIUS,
        };

        const animate = () => {
          d.context.clearRect(0, 0, d.canvas.width, d.canvas.height);

          position.x = position.x + vector.x * SPEED;
          position.y = position.y + vector.y * SPEED;

          d.context.beginPath();
          d.context.arc(position.x, position.y, 50, 0, Math.PI * 2);
          d.context.fill();

          if (position.x + RADIUS > d.canvas.width) {
            vector.x = vector.x * -1;
          }

          if (position.x - RADIUS < 0) {
            vector.x = vector.x * -1;
          }

          if (position.y + RADIUS > d.canvas.height) {
            vector.y = vector.y * -1;
          }

          if (position.y - RADIUS < 0) {
            vector.y = vector.y * -1;
          }

          animationFrameRef.current = requestAnimationFrame(animate);
        };

        animationFrameRef.current = requestAnimationFrame(animate);
      }}
    />
  );
};

const meta: Meta<typeof AnimatingShapes> = {
  title: "Animations/Animating shapes",
  component: AnimatingShapes,
};

export default meta;
type Story = StoryObj<typeof AnimatingShapes>;

export const Primary: Story = {};
