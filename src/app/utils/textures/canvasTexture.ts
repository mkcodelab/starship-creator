import { height2normal } from './height2normal';
import { noise } from './noise';

// create base class like GeneratedTexture, and extend it

export abstract class GeneratedTexture {
  public canvas = <HTMLCanvasElement>document.createElement('canvas');
  protected ctx = this.canvas.getContext('2d');

  public normalMapCanvas = <HTMLCanvasElement>document.createElement('canvas');
  protected normalCtx = this.normalMapCanvas.getContext('2d');

  constructor(protected res = 1024) {
    this.initCanvas();

    this.generate();
    this.generateNormalMap();
  }

  private initCanvas() {
    this.normalMapCanvas.width = this.res;
    this.normalMapCanvas.height = this.res;

    this.canvas.width = this.res;
    this.canvas.height = this.res;

    if (this.ctx) {
      this.ctx.fillStyle = '#333';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  abstract generate(): void;

  generateNormalMap() {
    // create normalmap
    //   convert grayscale heightMap to normalMap
    if (this.normalCtx) {
      this.normalCtx.drawImage(this.canvas, 0, 0);
      height2normal(this.normalMapCanvas);
    }
  }
}

export class CirclesTexture extends GeneratedTexture {
  generate(): void {
    if (this.ctx) {
      // blur is slow...
      //   this.ctx.filter = 'blur(4px)';
      noise(this.ctx);
    }
    for (let i = 0; i < 1000; i++) {
      const sizeFluct = 20;
      let x = Math.random() * this.res - 20;
      let y = Math.random() * this.res - 20;
      let size = Math.random() * sizeFluct;

      let light = Math.floor(Math.random() * 60 + 40);

      let col = `hsla(0, 0%, ${light}%, 1)`;

      if (this.ctx) {
        this.ctx.fillStyle = col;
        this.ctx.beginPath();
        this.ctx.arc(x, y, size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
      }
    }
  }
}

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

// refactor it later, to keep it DRY
export function alienMetalTexture() {
  const canvas = <HTMLCanvasElement>document.createElement('canvas');
  //@ts-ignore
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

  const normalMapCanvas = <HTMLCanvasElement>document.createElement('canvas');
  //@ts-ignore
  const normalCtx: CanvasRenderingContext2D = normalMapCanvas.getContext('2d');

  const res = 1024;

  normalMapCanvas.width = res;
  normalMapCanvas.height = res;

  canvas.width = res;
  canvas.height = res;

  ctx.fillStyle = '#333';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 400; i++) {
    const sizeFluct = 60;
    let x = Math.random() * res - 20;
    let y = Math.random() * res - 20;
    let size = Math.random() * sizeFluct;

    let light = Math.floor(Math.random() * 60 + 40);

    let col = `hsla(0, 0%, ${light}%, 1)`;

    // let shadowCol = `hsl(0, 0%, ${light})`;
    ctx.fillStyle = col;
    // ctx.shadowBlur = 55;
    // ctx.shadowColor = shadowCol;

    // ctx.fillRect(x, y, size * 2, size * 2);
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
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
