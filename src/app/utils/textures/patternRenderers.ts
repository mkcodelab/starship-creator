export function squarePatternRender(
  ctx: CanvasRenderingContext2D,
  quantity: number,
  offset: number
) {
  for (let i = 0; i < quantity; i++) {
    const sizeFluct = 60;
    let x = Math.random() * ctx.canvas.width - offset;
    let y = Math.random() * ctx.canvas.height - offset;
    let size = Math.random() * sizeFluct;
    let light = Math.floor(Math.random() * 60 + 40);
    let col = `hsla(0, 0%, ${light}%, 1)`;

    ctx.fillStyle = col;
    ctx.fillRect(x, y, size * 2, size * 2);
  }
}

export function circlePattern(ctx: CanvasRenderingContext2D, quantity: number) {
  for (let i = 0; i < quantity; i++) {
    const sizeFluct = 30;
    let x = Math.random() * ctx.canvas.width;
    let y = Math.random() * ctx.canvas.height;
    let size = Math.random() * sizeFluct;

    let light = Math.floor(Math.random() * 60 + 40);

    let col = `hsla(0, 0%, ${light}%, 1)`;

    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}
