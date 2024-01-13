import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";
import { useEffect, useRef } from "react";

const AnimatingShapes = () => {
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("useEffect callback");
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <Canvas
      draw={(d) => {
        const RADIUS = 50;

        d.context.fillStyle = d.random.color();
        d.context.strokeStyle = d.random.color();

        const p1 = {
          x: d.center.x,
          y: d.canvas.height - RADIUS,
        };

        const p2 = {
          x: d.center.x,
          y: 0 + RADIUS,
        };

        const P1_TO_P2 = "p1 to p2";
        const P2_TO_P1 = "p2 to p1";
        let direction = P1_TO_P2;

        let currentPosition = {
          x: p1.x,
          y: p1.y,
        };

        const animate = () => {
          d.context.clearRect(0, 0, d.canvas.width, d.canvas.height);

          if (direction === P1_TO_P2) {
            currentPosition.y--;
          } else {
            currentPosition.y++;
          }

          d.context.beginPath();
          d.context.arc(
            currentPosition.x,
            currentPosition.y,
            50,
            0,
            Math.PI * 2
          );
          d.context.fill();

          if (currentPosition.y === p2.y) {
            direction = P2_TO_P1;
          }
          if (currentPosition.y === p1.y) {
            direction = P1_TO_P2;
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
