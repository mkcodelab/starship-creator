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
  normalCtx.drawImage(canvas, 0, 0);
  //   convert grayscale heightMap to normalMap
  height2normal(normalMapCanvas);

  return {
    map: canvas,
    normalMap: normalMapCanvas,
  };
}

// mr doob to the rescue
// https://mrdoob.com/lab/javascript/height2normal/
function height2normal(canvas: HTMLCanvasElement) {
  var context = canvas.getContext('2d');

  var width = canvas.width;
  var height = canvas.height;

  var src = context!.getImageData(0, 0, width, height);
  var dst = context!.createImageData(width, height);

  for (var i = 0, l = width * height * 4; i < l; i += 4) {
    var x1, x2, y1, y2;

    if (i % (width * 4) == 0) {
      // left edge

      x1 = src.data[i];
      x2 = src.data[i + 4];
    } else if (i % (width * 4) == (width - 1) * 4) {
      // right edge

      x1 = src.data[i - 4];
      x2 = src.data[i];
    } else {
      x1 = src.data[i - 4];
      x2 = src.data[i + 4];
    }

    if (i < width * 4) {
      // top edge

      y1 = src.data[i];
      y2 = src.data[i + width * 4];
    } else if (i > width * (height - 1) * 4) {
      // bottom edge

      y1 = src.data[i - width * 4];
      y2 = src.data[i];
    } else {
      y1 = src.data[i - width * 4];
      y2 = src.data[i + width * 4];
    }

    dst.data[i] = x1 - x2 + 127;
    dst.data[i + 1] = y1 - y2 + 127;
    dst.data[i + 2] = 255;
    dst.data[i + 3] = 255;
  }

  context!.putImageData(dst, 0, 0);
}
