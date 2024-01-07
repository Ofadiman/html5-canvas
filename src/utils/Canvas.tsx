import { ElementRef, useLayoutEffect, useRef } from "react";
import { Faker, en } from "@faker-js/faker";

const instance = new Faker({ locale: [en] });

instance.seed(1);

export const CANVAS_SIZE = {
  WIDTH: 500,
  HEIGHT: 300,
};

export const Canvas = (props: {
  draw: (args: {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    faker: Faker;
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

    props.draw({ canvas, context, faker: instance });
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
