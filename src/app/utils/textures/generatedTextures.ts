import { CirclesTexture, MetalTexture } from './canvasTexture';
import * as THREE from 'three';

// created from class

// circle metal textures
const circleTextureTest = new CirclesTexture();

export const circleTextureTestMap = new THREE.CanvasTexture(
  circleTextureTest.canvas
);
repeatTexture(2, 2, circleTextureTestMap);
export const circleTextureTestNormalMap = new THREE.CanvasTexture(
  circleTextureTest.normalMapCanvas
);
repeatTexture(2, 2, circleTextureTestNormalMap);

// basic metal textures
const metalTexture = new MetalTexture();
export const basicSteelTextureMap = new THREE.CanvasTexture(
  metalTexture.canvas
);
repeatTexture(2, 2, basicSteelTextureMap);
export const basicSteelTextureNormalMap = new THREE.CanvasTexture(
  metalTexture.normalMapCanvas
);
repeatTexture(2, 2, basicSteelTextureNormalMap);

function repeatTexture(
  repeatX: number,
  repeatY: number,
  texture: THREE.Texture
) {
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
}
