import type { Meta, StoryObj } from "@storybook/react";
import { Canvas } from "./utils/Canvas";
import imageSrc from "../assets/gothic_2_home_screen.jpg";

const DrawingImages = () => {
  return (
    <Canvas
      draw={(d) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
          console.log(img.width);
          const offsetX = 0;
          const offsetY = 0;
          const clipX = 640;
          const clipY = 640;
          const scaleX = clipX / 2;
          const scaleY = clipY / 2;
          d.context.drawImage(
            img,
            150,
            0,
            clipX,
            clipY,
            offsetX,
            offsetY,
            scaleX,
            scaleY
          );
        };
      }}
    />
  );
};

const meta: Meta<typeof DrawingImages> = {
  title: "Images/Drawing images",
  component: DrawingImages,
};

export default meta;

export const Primary: StoryObj<typeof DrawingImages> = {};
