import { noise } from './perlinNoise';

export function perlinNoise(ctx: CanvasRenderingContext2D) {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  const imageData = ctx.createImageData(w, h);
  const freq = 1 / 20;
  let inc = 0;
  let z = 0;
  if (imageData) {
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        let col = Math.abs(noise(x * freq, y * freq, z)) * 500;

        imageData.data[inc++] = col;
        imageData.data[inc++] = col;
        imageData.data[inc++] = col;
        imageData.data[inc++] = 255;
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }
}

export function perlinNoise2(ctx: CanvasRenderingContext2D) {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  const imageData = ctx.createImageData(w, h);
  if (imageData) {
    for (let i = 0, l = imageData.data.length; i < l; i += 4) {
      let x = (i / 4) % w;
      let y = Math.floor(i / w / 4);

      let r = imageData.data[i + 0];
      let g = imageData.data[i + 1];
      let b = imageData.data[i + 2];
      // let a = imageData.data[i + 3];

      let pixel = shader(r, g, b, x, y, w, h);

      imageData.data[i] = pixel.r;
      imageData.data[i + 1] = pixel.g;
      imageData.data[i + 2] = pixel.b;
      imageData.data[i + 3] = pixel.a;
    }
    ctx.putImageData(imageData, 0, 0);
  }
}

function shader(
  r: number,
  g: number,
  b: number,
  x: number,
  y: number,
  w: number,
  h: number
) {
  x /= w;
  y /= h; // normalize
  var size = 10; // pick a scaling value
  var n = noise(size * x, size * y, 0);
  r = g = b = Math.round(255 * n);

  return { r: r, g: g, b: b, a: 255 };
}
