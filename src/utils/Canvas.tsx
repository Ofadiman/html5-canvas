import { ElementRef, useLayoutEffect, useRef } from "react";
import { faker } from "@faker-js/faker";

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

type DrawArgs = {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  radian: (degrees: number) => number;
  random: {
    color: () => string;
    point: () => { x: number; y: number };
    int: (min: number, max: number) => number;
  };
  center: {
    x: number;
    y: number;
  };
  constants: {
    colors: typeof COLORS;
    size: typeof SIZE;
  };
  clearCanvas: () => void;
};

export const Canvas = (props: {
  size?: {
    width: number;
    height: number;
  };
  animate?: boolean;
  draw: (args: DrawArgs) => void;
  once?: (args: DrawArgs) => void;
  nativeCanvasProps?: React.DetailedHTMLProps<
    React.CanvasHTMLAttributes<HTMLCanvasElement>,
    HTMLCanvasElement
  >;
}) => {
  const canvasRef = useRef<ElementRef<"canvas">>(null);
  const animationFrameRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    faker.seed(1);

    const canvas = canvasRef.current;
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

    const args: DrawArgs = {
      canvas,
      context,
      center: {
        x: props.size?.width ? props.size.width / 2 : SIZE.WIDTH / 2,
        y: props.size?.height ? props.size.height / 2 : SIZE.HEIGHT / 2,
      },
      random: {
        int: (min, max) => faker.number.int({ min, max }),
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
      radian: (degress) => (Math.PI / 180) * degress,
      clearCanvas: () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
      },
    };

    if (props.once) {
      props.once(args);
    }

    if (props.animate) {
      const loop = () => {
        props.draw(args);

        animationFrameRef.current = requestAnimationFrame(loop);
      };

      loop();
    } else {
      props.draw(args);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [props.draw]);

  return (
    <canvas
      {...props.nativeCanvasProps}
      width={props.size?.width ?? SIZE.WIDTH}
      height={props.size?.height ?? SIZE.HEIGHT}
      style={{
        border: "1px solid black",
        width: props.size?.width ?? SIZE.WIDTH,
        height: props.size?.height ?? SIZE.HEIGHT,
      }}
      ref={canvasRef}
    ></canvas>
  );
};
