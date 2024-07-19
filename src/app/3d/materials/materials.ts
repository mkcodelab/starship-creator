import * as THREE from 'three';

import {
  CirclesTexture,
  GeneratedTexture,
  MetalTexture,
  PerlinTexture,
  PerlinTexture2,
} from '../../utils/textures/canvasTexture';

const metalTexture = new MetalTexture();
export const BasicSteelMaterial = generateMaterial(metalTexture, 2, 2, {
  color: 0xffffff,
  metalness: 0.9,
  roughness: 0.2,
  flatShading: true,
});

const circlesTexture = new CirclesTexture();

export const AlienMetalMaterial = generateMaterial(circlesTexture, 2, 2, {
  color: 0xddffdd,
  metalness: 0.8,
  roughness: 0.2,
});

export const CorrugatedCopperMaterial = generateMaterial(circlesTexture, 2, 2, {
  color: 0xfabfab,
  metalness: 0.8,
  roughness: 0.3,
  flatShading: true,
});

const perlinTexture = new PerlinTexture();

export const PerlinTextureMaterial = generateMaterial(perlinTexture, 2, 2, {
  color: 0xccccff,
  metalness: 0.8,
  roughness: 0.2,
});

const perlinTexture2 = new PerlinTexture2();
export const PerlinTextureMaterial2 = generateMaterial(perlinTexture2, 2, 2, {
  color: 0xccccff,
  metalness: 0.5,
  roughness: 0.2,
});

export const DefaultMaterial = new THREE.MeshBasicMaterial({
  color: 0xcccccc,
});

export const TestStandardMaterial = generateMaterial(
  new PerlinTexture2(),
  2,
  2,
  { color: 0xffcccc, metalness: 0.8, roughness: 0.1 }
);

export function generateMaterial(
  generatedTextureClass: GeneratedTexture,
  repeatX: number,
  repeatY: number,
  materialParameters: THREE.MeshStandardMaterialParameters
) {
  const textureMap = new THREE.CanvasTexture(generatedTextureClass.canvas);
  const textureNormalMap = new THREE.CanvasTexture(
    generatedTextureClass.normalMapCanvas
  );
  repeatTexture(repeatX, repeatY, textureMap);
  repeatTexture(repeatX, repeatY, textureNormalMap);
  return new THREE.MeshStandardMaterial({
    map: textureMap,
    normalMap: textureNormalMap,
    ...materialParameters,
  });
}

// texture repeat helper function

function repeatTexture(
  repeatX: number,
  repeatY: number,
  texture: THREE.Texture
) {
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
}
