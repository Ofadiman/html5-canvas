import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";
import imageSrc from "../assets/gothic_2_home_screen.jpg";

const TransformingImages = () => {
  return (
    <Canvas
      size={{ width: 1920 / 2, height: 1080 / 2 }}
      draw={(d) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
          d.context.drawImage(img, 0, 0, 1920 / 2, 1080 / 2);
          const imageData = d.context.getImageData(
            d.center.x - 50,
            d.center.y - 50,
            100,
            100
          );

          let x = d.center.x - 50;
          let y = d.center.y - 50;

          for (let i = 0; i < imageData.data.length; i += 4) {
            const lineLength = Math.sqrt(
              Math.pow(d.center.x - x, 2) + Math.pow(d.center.y - y, 2)
            );

            if (lineLength <= 50) {
              imageData.data[i + 3] = 128;
            }

            if (i % 400 === 0 && i !== 0) {
              y++;
            }

            if (x < d.center.x + 50 - 1) {
              x++;
            } else {
              x = d.center.x - 50;
            }
          }

          d.context.putImageData(imageData, d.center.x - 50, d.center.y - 50);
        };
      }}
    />
  );
};

const meta: Meta<typeof TransformingImages> = {
  title: "Images/Transforming images",
  component: TransformingImages,
};

export default meta;
type Story = StoryObj<typeof TransformingImages>;

export const Primary: Story = {};
