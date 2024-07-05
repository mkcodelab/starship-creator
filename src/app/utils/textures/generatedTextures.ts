import { generateCanvasTexture } from './canvasTexture';
import * as THREE from 'three';

const hullMaterial = generateCanvasTexture();

export const generatedTextureMap = new THREE.CanvasTexture(hullMaterial.map);
generatedTextureMap.wrapS = generatedTextureMap.wrapT = THREE.RepeatWrapping;
generatedTextureMap.repeat.set(2, 2);

// generatedTextureMap.wrapS = generatedTextureMap.wrapT = THREE.RepeatWrapping;
export const generatedTextureNormalMap = new THREE.CanvasTexture(
  hullMaterial.normalMap
);
generatedTextureNormalMap.wrapS = generatedTextureNormalMap.wrapT =
  THREE.RepeatWrapping;
generatedTextureNormalMap.repeat.set(2, 2);
