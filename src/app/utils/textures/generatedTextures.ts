import {
  CirclesTexture,
  MetalTexture,
  PerlinTexture,
  PerlinTexture2,
} from './canvasTexture';
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

const perlinTexture = new PerlinTexture();
export const perlinTextureMap = new THREE.CanvasTexture(perlinTexture.canvas);
repeatTexture(2, 2, perlinTextureMap);

export const perlinTextureNormalMap = new THREE.CanvasTexture(
  perlinTexture.normalMapCanvas
);
repeatTexture(2, 2, perlinTextureNormalMap);

// maybe move this generation to the GeneratedTexture class, and return it instead just texture
const perlinTexture2 = new PerlinTexture2();
export const perlinTextureMap2 = new THREE.CanvasTexture(perlinTexture2.canvas);
repeatTexture(2, 2, perlinTextureMap2);
export const perlinTextureNormalMap2 = new THREE.CanvasTexture(
  perlinTexture2.normalMapCanvas
);
repeatTexture(2, 2, perlinTextureMap);

// texture repeat helper function

function repeatTexture(
  repeatX: number,
  repeatY: number,
  texture: THREE.Texture
) {
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
}
