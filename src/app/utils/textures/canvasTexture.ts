import { circlePattern, squarePatternRender } from './patternRenderers';
import { height2normal } from './height2normal';
import { simpleNoise } from './noise';
import { perlinNoise, perlinNoise2 } from './perlinNoiseRender';

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

// todo: extract some of drawing functions and use them in generate function implementation

export class CirclesTexture extends GeneratedTexture {
  generate(): void {
    if (this.ctx) {
      simpleNoise(this.ctx, 0.5);
      circlePattern(this.ctx, 1000);
    }
  }
}

export class MetalTexture extends GeneratedTexture {
  generate(): void {
    if (this.ctx) {
      simpleNoise(this.ctx, 0.9);
      squarePatternRender(this.ctx, 400, 10);
    }
  }
}

export class PerlinTexture extends GeneratedTexture {
  generate(): void {
    if (this.ctx) {
      perlinNoise(this.ctx);
    }
  }
}

export class PerlinTexture2 extends GeneratedTexture {
  override generate(): void {
    if (this.ctx) {
      perlinNoise2(this.ctx);
    }
  }
}
