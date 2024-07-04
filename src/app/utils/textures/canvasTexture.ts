export function generateCanvasTexture() {
  const canvas = <HTMLCanvasElement>document.createElement('canvas');
  //@ts-ignore
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

  const normalMapCanvas = <HTMLCanvasElement>document.createElement('canvas');
  //@ts-ignore
  const normalCtx: CanvasRenderingContext2D = normalMapCanvas.getContext('2d');

  const res = 2048;

  ctx.canvas.width = res;
  ctx.canvas.height = res;
  ctx.fillStyle = '#333';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  for (let i = 0; i < 2000; i++) {
    const sizeFluct = 60;
    let x = Math.random() * res;
    let y = Math.random() * res;
    let size = Math.random() * sizeFluct;

    let hue = Math.random() * 20 + 120;

    let light = Math.floor(Math.random() * 30 + 60);

    let col = `hsla(${hue}, 0%, ${light}%, 0.2)`;

    // let shadowCol = `hsl(${hue}, 100%, 50%)`;
    ctx.fillStyle = col;
    // ctx.shadowBlur = 55;
    // ctx.shadowColor = shadowCol;

    ctx.fillRect(x, y, size * 2, size * 2);
  }

  // create normalmap
  const imageData = ctx.getImageData(0, 0, res, res);
  const sobelData = createEdgeMapFromImageData(imageData);

  const normalImageData = normalCtx!.createImageData(res, res);
  normalImageData.data.set(sobelData);

  normalCtx!.putImageData(normalImageData, 0, 0);

  //   return ctx.canvas;
  //   return multiple canvases, desaturated, normalized etc
  return {
    map: ctx.canvas,
    normalMap: normalCtx!.canvas,
  };
}

// script copied from: https://gist.github.com/arifd/9ef3d02b43e858170f52553319c05952

// I wrote a sobel edge detector in Javascript!
// todo: try Laplacian of Gaussian (LoG) instead of Sobel

// Example usage (taking the pxiels 1D):
// const edge = createEdgeMapFromImageData(imageData);
// for (const i in edge) {
//   let x = i % canvas.width;
//   let y = (i - x) / canvas.width;
//   ctx.fillStyle = `rgba(${edge[i]},${edge[i]},${edge[i]},255)`;
//   ctx.fillRect(x, y, 1, 1 );
// }

const sobel_v = [-1.0, 0.0, +1.0, -2.0, 0.0, +2.0, -1.0, 0.0, +1.0];

const sobel_h = [-1.0, -2.0, -1.0, 0.0, 0.0, 0.0, +1.0, +2.0, +1.0];

// input: imageData object with RGBA data
// output: 2D array with edge detection data. Note, 1 channel per pixel.
export function createEdgeMapFromImageData(imageData: ImageData) {
  let pixels = new Uint8ClampedArray(imageData.data.length * 0.25);
  let width = imageData.width;
  let data = imageData.data;

  // create greyscale first
  {
    let i = imageData.data.length;
    while (i) {
      // let a = data[i-1];
      let b = data[i - 2];
      let g = data[i - 3];
      let r = data[i - 4];
      pixels[i * 0.25] = 0.3 * r + 0.59 * g + 0.11 * b; // Luminocity weighted average.
      // pixels[i*0.25] = (r+b+g)/3; // average
      i -= 4;
    }
  }

  // now edge detect
  for (let i = 0; i < pixels.length; i++) {
    // loop our 3x3 kernels, build our kernel values
    let hSum = 0;
    let vSum = 0;
    for (let y = 0; y < 3; y++)
      for (let x = 0; x < 3; x++) {
        let pixel = pixels[i + width * y + x];
        let kernelAccessor = x * 3 + y;
        hSum += pixel * sobel_h[kernelAccessor];
        vSum += pixel * sobel_v[kernelAccessor];
      }
    // apply kernel evaluation to current pixel
    pixels[i] = Math.sqrt(hSum * hSum + vSum * vSum);
    // pixels[i] = Math.abs((hSum + vSum) * 0.5);
  }

  return pixels;
}
