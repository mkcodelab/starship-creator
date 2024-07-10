export function noise(ctx: CanvasRenderingContext2D) {
  const w = ctx.canvas.width,
    h = ctx.canvas.height,
    iData = ctx.createImageData(w, h),
    buffer32 = new Uint32Array(iData.data.buffer),
    len = buffer32.length;
  let i = 0;

  for (; i < len; i++) if (Math.random() < 0.5) buffer32[i] = 0xffffffff;

  ctx.putImageData(iData, 0, 0);
}
