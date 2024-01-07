import { ElementRef, useLayoutEffect, useRef } from "react";
import { faker } from "@faker-js/faker";

faker.seed(1);

const CANVAS_SIZE = {
  WIDTH: 500,
  HEIGHT: 300,
} as const;

const COLORS = {
  RED: "#ef4444",
  ORANGE: "#f97316",
  AMBER: "#f59e0b",
  YELLOW: "#eab308",
  LIME: "#84cc16",
  GREEN: "#22c55e",
  EMERALD: "#10b981",
} as const;

export const Canvas = (props: {
  draw: (args: {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    random: {
      color: () => string;
      point: () => { x: number; y: number };
    };
    constants: {
      colors: typeof COLORS;
    };
  }) => void;
}) => {
  const ref = useRef<ElementRef<"canvas">>(null);

  useLayoutEffect(() => {
    const canvas = ref.current;
    if (!canvas) {
      console.error(`canvas not available`);
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      console.error(`no context, returning`);
      return;
    }

    props.draw({
      canvas,
      context,
      random: {
        color: () => faker.helpers.arrayElement(Object.values(COLORS)),
        point: () => ({
          x: faker.number.int({ min: 0, max: CANVAS_SIZE.WIDTH }),
          y: faker.number.int({ min: 0, max: CANVAS_SIZE.HEIGHT }),
        }),
      },
      constants: {
        colors: COLORS,
      },
    });
  }, []);

  return (
    <canvas
      width={CANVAS_SIZE.WIDTH}
      height={CANVAS_SIZE.HEIGHT}
      style={{
        border: "1px solid black",
        width: CANVAS_SIZE.WIDTH,
        height: CANVAS_SIZE.HEIGHT,
      }}
      ref={ref}
    ></canvas>
  );
};
