import { ElementRef, useLayoutEffect, useRef } from "react";
import { faker } from "@faker-js/faker";

faker.seed(1);

const SIZE = {
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
      size: typeof SIZE;
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

    context.clearRect(0, 0, canvas.width, canvas.height);

    props.draw({
      canvas,
      context,
      random: {
        color: () => faker.helpers.arrayElement(Object.values(COLORS)),
        point: () => ({
          x: faker.number.int({ min: 0, max: SIZE.WIDTH }),
          y: faker.number.int({ min: 0, max: SIZE.HEIGHT }),
        }),
      },
      constants: {
        colors: COLORS,
        size: SIZE,
      },
    });
  }, [props.draw]);
  return (
    <canvas
      width={SIZE.WIDTH}
      height={SIZE.HEIGHT}
      style={{
        border: "1px solid black",
        width: SIZE.WIDTH,
        height: SIZE.HEIGHT,
      }}
      ref={ref}
    ></canvas>
  );
};
