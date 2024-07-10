import {
  alienMetalTexture,
  CirclesTexture,
  generateCanvasTexture,
} from './canvasTexture';
import * as THREE from 'three';

const hullMaterial = generateCanvasTexture();

export const generatedTextureMap = new THREE.CanvasTexture(hullMaterial.map);
repeatTexture(2, 2, generatedTextureMap);

export const generatedTextureNormalMap = new THREE.CanvasTexture(
  hullMaterial.normalMap
);
repeatTexture(2, 2, generatedTextureNormalMap);

// just testing
const alienMaterial = alienMetalTexture();

export const alienMetalMap = new THREE.CanvasTexture(alienMaterial.map);

repeatTexture(2, 2, alienMetalMap);

export const alienMetalNormalMap = new THREE.CanvasTexture(
  alienMaterial.normalMap
);
repeatTexture(2, 2, alienMetalNormalMap);

// created from class

const circleTextureTest = new CirclesTexture();

export const circleTextureTestMap = new THREE.CanvasTexture(
  circleTextureTest.canvas
);
repeatTexture(2, 2, circleTextureTestMap);
export const circleTextureTestNormalMap = new THREE.CanvasTexture(
  circleTextureTest.normalMapCanvas
);
repeatTexture(2, 2, circleTextureTestNormalMap);

function repeatTexture(
  repeatX: number,
  repeatY: number,
  texture: THREE.Texture
) {
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
}
