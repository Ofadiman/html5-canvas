import type { Meta } from "@storybook/react";
import { Canvas } from "./utils/Canvas";

const DownloadCanvas = () => {
  let canvasUrl = "";

  return (
    <div style={{ display: "flex", flexFlow: "column", width: 502, gap: 4 }}>
      <Canvas
        draw={(d) => {
          for (let i = 0; i < 30; i++) {
            d.context.strokeStyle = d.random.color();
            d.context.beginPath();
            const p1 = d.random.point();
            const p2 = d.random.point();
            d.context.moveTo(p1.x, p2.x);
            d.context.lineTo(p2.x, p2.y);
            d.context.stroke();
          }

          canvasUrl = d.canvas.toDataURL();
        }}
      />
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          const anchor = document.createElement("a");
          anchor.href = canvasUrl;
          anchor.download = "canvas.png";
          anchor.click();
          anchor.remove();
        }}
      >
        Downlaod
      </button>
    </div>
  );
};

const meta: Meta<typeof DownloadCanvas> = {
  title: "Utils/Download canvas as an image",
  component: DownloadCanvas,
};

export default meta;

export const Primary = {};
