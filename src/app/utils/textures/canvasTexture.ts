import { height2normal } from './height2normal';

export function generateCanvasTexture() {
  const canvas = <HTMLCanvasElement>document.createElement('canvas');
  //@ts-ignore
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

  const normalMapCanvas = <HTMLCanvasElement>document.createElement('canvas');
  //@ts-ignore
  const normalCtx: CanvasRenderingContext2D = normalMapCanvas.getContext('2d');

  const res = 1024;

  normalMapCanvas.width = res;
  normalMapCanvas.height = res;

  ctx.canvas.width = res;
  ctx.canvas.height = res;
  ctx.fillStyle = '#333';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  for (let i = 0; i < 400; i++) {
    const sizeFluct = 60;
    let x = Math.random() * res - 20;
    let y = Math.random() * res - 20;
    let size = Math.random() * sizeFluct;
    // in case when we want colored texture
    // let hue = Math.random() * 20 + 120;

    let light = Math.floor(Math.random() * 60 + 40);

    // let col = `hsla(${hue}, 0%, ${light}%, 1)`;
    let col = `hsla(0, 0%, ${light}%, 1)`;

    // let shadowCol = `hsl(${hue}, 100%, 50%)`;
    ctx.fillStyle = col;
    // ctx.shadowBlur = 55;
    // ctx.shadowColor = shadowCol;

    ctx.fillRect(x, y, size * 2, size * 2);
  }

  // create normalmap
  normalCtx.drawImage(canvas, 0, 0);
  //   convert grayscale heightMap to normalMap
  height2normal(normalMapCanvas);

  return {
    map: canvas,
    normalMap: normalMapCanvas,
  };
}
