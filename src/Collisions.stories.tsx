import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const big = {
  color: "black",
  radius: 50,
  mass: 100,
  position: {
    x: 50,
    y: 150,
  },
  speed: 5,
  vector: {
    x: 0.3,
    y: 0.6,
  },
};

const small = {
  color: "black",
  radius: 20,
  mass: 40,
  position: {
    x: 300,
    y: 150,
  },
  speed: 5,
  vector: {
    x: 0.5,
    y: 0.9,
  },
};

type Ball = typeof big;

const checkForCollision = (first: Ball, second: Ball): boolean => {
  const distance = Math.sqrt(
    (first.position.x - second.position.x) *
      (first.position.x - second.position.x) +
      (first.position.y - second.position.y) *
        (first.position.y - second.position.y)
  );

  if (distance >= big.radius + small.radius) {
    return false;
  }

  return true;
};

const Collisions = () => {
  return (
    <Canvas
      once={(d) => {
        big.color = d.random.color();
        small.color = d.random.color();
      }}
      animate={true}
      draw={(d) => {
        d.clearCanvas();

        d.context.fillStyle = big.color;
        d.context.beginPath();
        d.context.arc(
          big.position.x,
          big.position.y,
          big.radius,
          d.radian(0),
          d.radian(360)
        );
        d.context.closePath();
        d.context.fill();

        big.position.x = big.position.x + big.speed * big.vector.x;
        if (big.position.x + big.radius >= d.canvas.width) {
          big.vector.x *= -1;
        }
        if (big.position.x - big.radius <= 0) {
          big.vector.x *= -1;
        }

        big.position.y = big.position.y + big.speed * big.vector.y;
        if (big.position.y + big.radius >= d.canvas.height) {
          big.vector.y *= -1;
        }
        if (big.position.y - big.radius <= 0) {
          big.vector.y *= -1;
        }

        d.context.fillStyle = small.color;
        d.context.beginPath();
        d.context.arc(
          small.position.x,
          small.position.y,
          small.radius,
          d.radian(0),
          d.radian(360)
        );
        d.context.closePath();
        d.context.fill();

        small.position.x = small.position.x + small.speed * small.vector.x;
        if (small.position.x + small.radius >= d.canvas.width) {
          small.vector.x *= -1;
        }
        if (small.position.x - small.radius <= 0) {
          small.vector.x *= -1;
        }

        small.position.y = small.position.y + small.speed * small.vector.y;
        if (small.position.y + small.radius >= d.canvas.height) {
          small.vector.y *= -1;
        }
        if (small.position.y - small.radius <= 0) {
          small.vector.y *= -1;
        }

        if (checkForCollision(small, big)) {
          const v1 = {
            x:
              (small.vector.x * (small.mass - big.mass) +
                2 * big.mass * big.vector.x) /
              (small.mass + big.mass),
            y:
              (small.vector.y * (small.mass - big.mass) +
                2 * big.mass * big.vector.y) /
              (small.mass + big.mass),
          };

          const v2 = {
            x:
              (big.vector.x * (big.mass - small.mass) +
                2 * small.mass * small.vector.x) /
              (small.mass + big.mass),
            y:
              (big.vector.y * (big.mass - small.mass) +
                2 * small.mass * small.vector.y) /
              (small.mass + big.mass),
          };

          small.vector.x = v1.x;
          small.vector.y = v1.y;
          big.vector.x = v2.x;
          big.vector.y = v2.y;
        }
      }}
    />
  );
};

const meta: Meta<typeof Collisions> = {
  title: "Physics/Collisions",
  component: Collisions,
};

export default meta;

export const Primary: StoryObj<typeof Collisions> = {};
