export class Ball {
  public radius = 10;
  public color = "red";
  public position = {
    x: 0,
    y: 0,
  };
  public mass = 0;
  public speed = {
    x: 0,
    y: 0,
  };
  public context: CanvasRenderingContext2D | null = null;

  public draw() {
    if (this.context === null) {
      return;
    }

    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      2 * Math.PI
    );
    this.context.fill();
  }
}
